import {gql} from "@apollo/client";


export const GET_SUBREDDIT_BY_TOPIC = gql`
	query MyQuery($topic: String!) {
      getSubredditListByTopic(topic: $topic) {
					id
					topic
					created_at
			}
	}
`;


export const GET_ALL_POSTS = gql`
	query MyQuery {
			getPostList {
					body
					created_at
					title
					username
					image
					subreddit_id
					comments {
							id
							created_at
							post_id
							text
							username
          }
					votes {
							created_at
							id
							upvote
							username
          }
					subreddit {
							id
							topic
							created_at
          }
      }
	}
`;
