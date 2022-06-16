import {gql} from "@apollo/client";

export const GET_SUBREDDIT_BY_TOPIC = gql`
    query MyQuery($topic: String!) {
        getSubredditListByTopic(topic: $topic) {
						topic
						id
						created_at
				}
		}
`;


export const GET_ALL_POSTS= gql`
	query My {
			getPostList {
					title
					body
					image
					created_at
					username
					subreddit_id
					comments {
							created_at
							id
							post_id
							text
							username
          }
					subreddits {
							id
							topic
							created_at
          }
					votes {
							id
							post_id
							upvote
							username
							created_at
          }
      }
	}
`;
