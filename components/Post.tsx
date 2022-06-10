import React from 'react';
import {Post} from "../types";
import {ArrowDownIcon, ArrowUpIcon} from "@heroicons/react/outline";
import AvatarComponent from "./Avatar";

interface PostProps {
	post: Post;
}

const PostCard: React.FC<PostProps> = ({post}) => {
	return (
		<div className={'flex cursor-pointer rounded-md border border-green-300 bg-white shadow-sm hover:border-green-600'}>

			{/*vote*/}
			<div className={'flex flex-col items-center justify-start space-y-1 rounded-md bg-gray-50 p-4 text-gray-400'}>
				<ArrowUpIcon className={'voteButtons hover:text-green-400'} />
				<p className={'text-green-600 font-bold text-xs'}>0</p>
				<ArrowDownIcon className={'voteButtons hover:text-green-400'} />
			</div>

			<div className={'p-3 pb-1'}>
				{/*head*/}
				<div>
					<AvatarComponent seed={post.subreddit[0].topic} />
					<p>
						<span>r/{post.subreddit[0].topic}</span>
						{' '} Posted by u/{post.username}
					</p>
				</div>

				{/*body*/}

				{/*image*/}

				{/*foot*/}
			</div>
		</div>
	);
};

export default PostCard;
