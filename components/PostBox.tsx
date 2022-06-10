import React, {useEffect, useState} from 'react';
import {useSession} from "next-auth/react";
import AvatarComponent from "./Avatar";
import {LinkIcon, PhotographIcon} from "@heroicons/react/outline";
import {useForm} from "react-hook-form";
import {useMutation} from "@apollo/client";
import {ADD_POST, ADD_SUBREDDIT} from "../graphql/mutations";
import {apolloClient} from "../apollo-client";
import {GET_SUBREDDIT_BY_TOPIC} from "../graphql/queries";
import {toast} from "react-hot-toast";

type FormData = {
	postTitle: string,
	postBody: string,
	postImage: string,
	subreddit: string
}


const PostBoxComponent: React.FC = () => {

	const {data: session} = useSession();
	const {register, setValue, handleSubmit, watch, formState: {errors}} = useForm<FormData>();

	const [postImageOpen, setPostImageOpen] = useState(false);

	// interactive with graphql
	const [addPost] = useMutation(ADD_POST);
	const [addSubreddit] = useMutation(ADD_SUBREDDIT);

	const onSubmit = handleSubmit(async (formData) => {
		console.log(formData);


		// use toaster, will display in _app.js <Toaster /> component
		const notification = toast.loading('creating new post...');

		try {
		//	Query for the subreddit topic
			const {data: {getSubredditListByTopic}} = await apolloClient.query({
				query: GET_SUBREDDIT_BY_TOPIC,
				variables: {
					topic: formData.subreddit
				}
			});

			const subredditExisting: boolean= getSubredditListByTopic?.length > 0;

			if (!subredditExisting) {

				//	create subreddit
				console.log('community is new, need to add new one...');
				const {data: {insertSubreddit: newSubreddit}} = await addSubreddit({
					variables: {
						topic: formData.subreddit
					}
				});
				console.log('creating post', formData);
				const image = formData.postImage || '';

				const {data: {insertPost: newPost}} = await addPost({
					variables: {
						body: formData.postBody,
						title: formData.postTitle,
						image: image,
						subreddit_id: newSubreddit.id,
						username: session?.user?.name
					}
				});

				console.log('newpost added: ', newPost);


			} else {

				//	use existing subreddit
				console.log('using the existing community');
				console.log(getSubredditListByTopic);

				const image = formData.postImage || '';

				const {data: {insertPost: newPost}} = await addPost({
					variables: {
						body: formData.postBody,
						title: formData.postTitle,
						image: image,
						subreddit_id: getSubredditListByTopic[0].id,
						username: session?.user?.name
					}
				});

				console.log('new posted under existing subreddit: ', newPost);
			}

		//	after the post added, clear the form info in page
			setValue('postTitle', '');
			setValue('postBody', '');
			setValue('postImage', '');
			setValue('subreddit', '');

			toast.success('new post created', {
				id: notification
			})

		} catch (err) {
			toast.error('something wrong', {
				id: notification
			})
		}

	});


	return (
		<form onSubmit={onSubmit} className={'sticky z-10 bg-white border rounded-b-md border-gray-300 p-2'}>
			<div
				className={`flex items-center space-x-2`}>
				<AvatarComponent />
				<input
					{
					...register('postTitle',
						{required: true})
				}
					disabled={!session} type="text"
					className={'bg-gray-100 p-2 pl-5 outline-none rounded-sm flex-1'}
					placeholder={session ? 'create one post by inputting title here...' : 'Login firstly please'}
				/>
				<PhotographIcon
					onClick={() => setPostImageOpen(!postImageOpen)}
					className={`h-6 ${!postImageOpen && 'text-gray-300'} cursor-pointer ${postImageOpen && 'text-green-400'}`} />
				<LinkIcon className={' h-6 text-gray-300'} />
			</div>
			{
				watch('postTitle') && (
					<div className={'flex flex-col py-2'}>
						<div className={'flex items-center px-2'}>
							<p className={'text-green-400 min-w-[90px]'}>Body:</p>
							<input
								className={'m-2 flex-1 bg-gray-100 outline-none'}
								{...register('postBody')}  type="text" placeholder={'Text optional'} />
						</div>
						<div className={'flex items-center px-2'}>
							<p className={'text-green-400 min-w-[90px]'}>Community:</p>
							<input
								className={'m-2 flex-1 bg-gray-100 outline-none'}
								{...register('subreddit', {required: true})}  type="text" placeholder={'text community name'} />
						</div>
						{
							postImageOpen && (
								<div className={'flex items-center px-2'}>
									<p className={'text-green-400 min-w-[90px]'}>Image Url:</p>
									<input
										className={'m-2 flex-1 bg-gray-100 outline-none'}
										{...register('postImage')}  type="text" placeholder={'text community name'} />
								</div>
							)
						}
					</div>
				)
			}
			{
				Object.keys(errors).length > 0 && (
					<div className={'space-y-2 text-red-600'}>
						{
							errors.postTitle?.type === 'required' && (
								<p>A title is needed</p>
							)
						}
						{
							errors.subreddit?.type === 'required' && (
								<p>A community is needed</p>
							)
						}
					</div>
				)
			}

			{
				!!watch('postTitle') && (
					<button type={'submit'} className={'w-full rounded-full bg-green-400 text-white'}>Create Post</button>
				)
			}
		</form>
	);
};

export default PostBoxComponent;
