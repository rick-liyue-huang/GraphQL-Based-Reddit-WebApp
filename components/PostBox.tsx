import React, {useState} from 'react';
import {useSession} from "next-auth/react";
import AvatarComponent from "./Avatar";
import {LinkIcon, PhotographIcon} from "@heroicons/react/outline";
import {useForm} from "react-hook-form";
import {useMutation, useQuery} from "@apollo/client";
import {ADD_POST, ADD_SUBREDDIT} from "../graphql/mutations";
import apolloClient from "../apollo-client";
import {GET_SUBREDDIT_BY_TOPIC} from "../graphql/queries";
import {toast, useToaster} from "react-hot-toast";

type FormData = {
	postTitle: string,
	postBody: string,
	postImage: string,
	subreddit: string
}


const PostBoxComponent: React.FC = () => {

	// using next-auth to confirm the input info
	const {data: session} = useSession();

	// using react-hook-form to confirm the form data
	const {
		register, setValue, handleSubmit, watch, formState: {errors}
	} = useForm<FormData>();

	const [imageOpen, setImageOpen] = useState<boolean>(false);

	// will use graphql mutation and query
	const [addPost] = useMutation(ADD_POST);
	const [addSubreddit] = useMutation(ADD_SUBREDDIT);
	const {data: getSubredditListByTopic} = useQuery(GET_SUBREDDIT_BY_TOPIC)

	const onSubmit = handleSubmit(async (formData) => {
		console.log(formData);

		// use the toaster
		const notification = toast.loading('Creating New Post...');

		try {

		//	query for the subreddit topic
			const {data: {getSubredditListByTopic}} = await apolloClient.query({
				query: GET_SUBREDDIT_BY_TOPIC,
				fetchPolicy: 'no-cache', // very important!!! prevent refresh page after submit form
				variables: {
					topic: formData.subreddit
				}
			});


			// it means the community exists
			const subRedditExisting = await getSubredditListByTopic.length > 0;

			if (!subRedditExisting) {
			//	create community
				console.log(`community is new!!! ------`);
				const {data: {insertSubreddit: newSubreddit} } = await addSubreddit({
					variables: {
						topic: formData.subreddit
					}
				});

				console.log('creating post from formData: ', formData);
				const image = formData.postImage || '';

				const {data: {insertPost: newPost}} = await addPost({
					variables: {
						title: formData.postTitle,
						body: formData.postBody,
						image: image,
						subreddit_id: newSubreddit.id,
						username: session?.user?.name
					}
				});

				console.log(`new post: ---- ${newPost} `);

			} else {
			//	using the existing community

				console.log(`using the existing community`)
				console.log(`getSubredditListByTopic: ${getSubredditListByTopic}`);

				const image = formData.postImage || '';

				const {data: {insertPost: newPost}} = await addPost({
					variables: {
						title: formData.postTitle,
						body: formData.postBody,
						image: image,
						subreddit_id: getSubredditListByTopic[0].id,
						username: session?.user?.name
					}
				});

				console.log('new post: ', newPost)
			}

		//	after the post has been added, clear the input fields
			setValue('postTitle', '');
			setValue('postBody', '');
			setValue('postImage', '');
			setValue('subreddit', '');

		//	get the toast again
			toast.success('New Post Created...', {
				id: notification
			})

			// location.reload();

		} catch (err: any) {

			console.log(err);
			toast.error(`Something Is Wrong... ${err.message}`, {
				id: notification
			});
		}

	})

	return (
		<form
			className={'sticky top-16 z-20 rounded-md border border-gray-100 bg-white'}
			onSubmit={onSubmit}
		>
			<div className={'flex items-center space-x-3'}>
				<AvatarComponent />
				<input
					{
						...register('postTitle', {required: true})
					}
					type="text" disabled={!session} className={'flex-1 p-1 pl-5 outline-none rounded-md bg-blue-100'}
					placeholder={session ? 'create post by inputting title...' : 'login firstly please'}
				/>
				<PhotographIcon
					onClick={() => setImageOpen(!imageOpen)}
					className={`h-6 text-green-400 cursor-pointer ${imageOpen && 'text-blue-400'}`}
				/>
				<LinkIcon className={`h-6 text-green-400`}/>
			</div>


			{
				(!!watch('postTitle')) && (
					<div className={'flex flex-col py-1'}>
						{/*	post body */}
						<div className={'flex items-center px-1'}>
							<p className={'min-w-[90px] text-green-400'}>Body:</p>
							<input
								className={'flex-1 m-1 outline-none bg-purple-100'}
								{...register('postBody')} type="text" placeholder={'input optional post body...'}
							/>
						</div>
						<div className={'flex items-center px-1'}>
							<p className={'min-w-[90px] text-green-400'}>Community:</p>
							<input
								className={'flex-1 m-1 outline-none bg-purple-100'}
								{...register('subreddit', {required: true})} type="text" placeholder={'input community name...'}
							/>
						</div>

						{
							imageOpen && (
								<div className={'flex items-center px-1'}>
									<p className={'min-w-[90px] text-green-400'}>Image Url:</p>
									<input
										className={'flex-1 m-1 outline-none bg-purple-100'}
										{...register('postImage')} type="text" placeholder={'input image url..'}
									/>
								</div>
							)
						}

						{/*	errors here */}
						{
							Object.keys(errors).length > 0 && (
								<div className={'space-y-1 text-red-600'}>
									{
										errors.postTitle?.type === 'required' && (
											<p>A post title is needed!</p>
										)
									}
									{
										errors.subreddit?.type === 'required' && (
											<p>A community is needed!</p>
										)
									}
								</div>
							)
						}

						{
							!!watch('postTitle') && (
								<button
									className={'text-white p-2 min-w-[600px] bg-green-400 rounded-full mx-auto'} type={'submit'}
								>Create Post</button>
							)
						}
					</div>
				)
			}
		</form>

	);
};

export default PostBoxComponent;
