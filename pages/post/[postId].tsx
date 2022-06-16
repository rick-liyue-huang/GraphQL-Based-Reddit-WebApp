import React from 'react';
import {useRouter} from "next/router";
import {useQuery} from "@apollo/client";
import {GET_SINGLE_POST_BY_ID} from "../../graphql/queries";
import {PostModel} from "../../types";
import PostCardComponent from "../../components/PostCard";
import {useSession} from "next-auth/react";

const PostPage: React.FC = () => {

	const router = useRouter();
	const {data} = useQuery(GET_SINGLE_POST_BY_ID, {
		variables: {
			post_id: router.query.postId
		}
	});
	const {data: session} = useSession();

	const post: PostModel = data?.getPostById

	return (
		<div className={'mx-auto my-6 max-w-6xl'}>
			<PostCardComponent post={post} />

			<div className={'rounded-md border border-t-0 border-green-200 bg-blue-100 pl-16'}>
				<p className={'text-sm'}>
					Comment as <span className={'text-purple-400'}>{session?.user?.name}</span>
				</p>
				<form>
					<textarea disabled={!session} className={'rounded-md border border-green-200 h-24 p-2 pl-4 outline-none disabled:bg-gray-50'} placeholder={session ? 'Give me some ideas' : 'Please login firstly'}></textarea>
				</form>
			</div>
		</div>
	);
};

export default PostPage;
