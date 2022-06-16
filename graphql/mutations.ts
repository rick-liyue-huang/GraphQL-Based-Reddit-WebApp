import {gql} from "@apollo/client";



export const ADD_POST = gql`
	mutation MyMutation(
		$username: String!
		$title: String!
		$body: String!
		$image: String!
		$subreddit_id: ID!
	) {
			insertPost(
          username: $username
          title: $title
          body: $body
          image: $image
          subreddit_id: $subreddit_id
			) {
					id
					body
					created_at
					image
					title
					username
					subreddit_id
			}
	}
`;

export const ADD_SUBREDDIT = gql`
	mutation My($topic: String!) {
      insertSubreddit(topic: $topic) {
					id
					topic
					created_at
			}
	}
`;
