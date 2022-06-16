import React from 'react';
import {useQuery} from "@apollo/client";
import {GET_ALL_POSTS, GET_ALL_POSTS_BY_TOPIC} from "../graphql/queries";
import {PostModel} from "../types";
import PostCardComponent from "./PostCard";

interface FeedProps {
	topic?: string;
}

const FeedComponent: React.FC<FeedProps> = ({topic}) => {

	// compare with the usequery in postBox component
	const {data, error} = !topic ?
		useQuery(GET_ALL_POSTS) :
		useQuery(GET_ALL_POSTS_BY_TOPIC, {
			variables: {
				topic: topic
			}
		});

	const posts: PostModel[] = !topic ? data?.getPostList : data?.getPostListByTopic;

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
