
import {gql} from "@apollo/client";

export const ADD_POST	= gql`
    mutation MyMutation(
        $username: String!
        $title: String!
        $subreddit_id: ID!
        $body: String!
        $image: String!
    ) {
        insertPost(
            username: $username
            title: $title
            subreddit_id: $subreddit_id
            body: $body
            image: $image
        ) {
            body
            created_at
            id
            image
            subreddit_id
            title
            username
        }
    }
`;


export const ADD_SUBREDDIT = gql`
    mutation MyMutation($topic: String!) {
        insertSubreddit(topic: $topic) {
            id
            topic
            created_at
        }
    }
`;
