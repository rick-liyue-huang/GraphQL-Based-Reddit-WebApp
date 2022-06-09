import React, {useState} from 'react';
import {useSession} from "next-auth/react";
import AvatarComponent from "./Avatar";
import {LinkIcon, PhotographIcon} from "@heroicons/react/outline";
import {useForm} from "react-hook-form";

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

	const onSubmit = handleSubmit(async (formData) => {
		console.log(formData);
	})

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
