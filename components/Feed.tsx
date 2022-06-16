import React from 'react';
import {useQuery} from "@apollo/client";
import {GET_ALL_POSTS} from "../graphql/queries";
import {PostModel} from "../types";
import PostCardComponent from "./PostCard";


const FeedComponent: React.FC = () => {

	// compare with the usequery in postBox component
	const {data, error} = useQuery(GET_ALL_POSTS);

	const posts: PostModel[] = data?.getPostList || [];

	return (
		<div className={'mt-3 space-y-3'}>
			{
				posts?.map(post => (
					<PostCardComponent key={post.id} post={post} />
				))
			}
		</div>
	);
};

export default FeedComponent;
