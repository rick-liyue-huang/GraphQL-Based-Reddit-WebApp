import React from 'react';
import {useQuery} from "@apollo/client";
import {GET_ALL_POSTS} from "../graphql/queries";
import {Post} from "../types";
import PostCard from "./Post";

const FeedComponent: React.FC = () => {

	const {data, error} = useQuery(GET_ALL_POSTS);

	const posts: Post[] = data?.getPostList;

	return (
		<div className={''}>
			{
				posts?.map(post => (
					<PostCard
						key={post.id}
						post={post}
					/>
				))
			}
		</div>
	);
};

export default FeedComponent;
