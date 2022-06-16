import {gql} from "@apollo/client";
import exp from "constants";

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
					id
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

export const GET_ALL_POSTS_BY_TOPIC = gql`
	query My($topic: String!) {
      getPostListByTopic(topic: $topic) {
					id
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

export const GET_SINGLE_POST_BY_ID = gql`
	query My($post_id: ID!) {
		getPostById(post_id: $post_id) {
        id
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
