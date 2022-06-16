import React from 'react';
import {PostModel} from "../types";
import {
	ArrowDownIcon,
	ArrowUpIcon,
	BookmarkIcon,
	ChatAltIcon,
	DotsHorizontalIcon,
	GiftIcon,
	ShareIcon
} from "@heroicons/react/outline";
import AvatarComponent from "./Avatar";
import TimeAgo from 'react-timeago';
import Image from "next/image";

interface PostCardProps {
	post: PostModel;
}

const PostCardComponent: React.FC<PostCardProps> = ({post}) => {
	return (
		<div className={'flex cursor-pointer rounded-md border border-green-200 bg-white shadow-sm hover:border-green-500 rounded-md'}>
		{/*	vote */}
			<div className={'flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-100 p-3'}>
				<ArrowUpIcon className={'voteButtons hover:text-green-300 hover:bg-white'} />
				<p className={'text-xs font-bold text-blue-400'}>0</p>
				<ArrowDownIcon className={'voteButtons hover:text-green-300 hover:bg-white'} />
			</div>

			<div className={'p-3 pb-1 flex flex-col'}>
			{/*	header */}
				<div className={'flex items-center space-x-2'}>
					<AvatarComponent seed={post.subreddits[0]?.topic} />
					<p className={'text-xs text-gray-300'}>
						<span className={'font-bold text-black hover:text-green-400'}>r/{post.subreddits[0]?.topic}</span>
						{' '}Posted by u/{post.username} {' '} <TimeAgo date={post.created_at} />
					</p>
				</div>

				{/* body */}
				<div className={'py-3'}>
					<h2 className={'text-xl font-semibold'}>{post.title}</h2>
					<p className={'mt-2 text-sm font-light'}>{post.body}</p>
				</div>
			{/*	image */}
				<img className={'w-full'} src={post.image} />

			{/*	footer*/}
				<div className={'flex space-x-3 text-green-300'}>
					<div className={'postButton'}>
						<ChatAltIcon className={'w-6 h-6'} />
						<p className={''}>{post.comments.length}</p>
					</div>
					<div className={'postButton'}>
						<GiftIcon className={'w-6 h-6'} />
						<p className={'hidden sm:inline'}>Award</p>
					</div>
					<div className={'postButton'}>
						<ShareIcon className={'w-6 h-6'} />
						<p className={'hidden sm:inline'}>Share</p>
					</div>
					<div className={'postButton'}>
						<BookmarkIcon className={'w-6 h-6'} />
						<p className={'hidden sm:inline'}>Save</p>
					</div>
					<div className={'postButton'}>
						<DotsHorizontalIcon className={'w-6 h-6'} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostCardComponent;
