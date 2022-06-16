import React from 'react';
import {useRouter} from "next/router";
import AvatarComponent from "../../components/Avatar";
import PostBoxComponent from "../../components/PostBox";
import FeedComponent from "../../components/Feed";


const CommunityPage: React.FC = () => {

	const {query: {topic}} = useRouter()

	return (
		<div className={'h-24 bg-blue-400 p-8'}>
			<div className={'-mx-8 mt-10 bg-white'}>
				<div className={'mx-auto flex max-w-5xl items-center space-x-4 pb-3'}>
					<div className={'-mt-5'}>
						<AvatarComponent seed={topic as string} large />
					</div>
					<div className={'py-2'}>
						<h1 className={'text-3xl font-semibold'}>Welcome to r/{topic} Community</h1>
						<p className={'text-sm text-green-400'}>r/{topic}</p>
					</div>
				</div>
			</div>

			<div className={'mx-auto max-w-5xl mt-6 pb-10'}>
				<PostBoxComponent subreddit={topic as string} />
				<FeedComponent topic={topic as string} />
			</div>
		</div>
	);
};

export default CommunityPage;
