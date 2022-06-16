
export type CommentModel = {
	created_at: string,
	id: number,
	post_id: number,
	text: string,
	username: string
};


export type VoteModel = {
	created_at: string,
	id: number,
	post_id: number,
	upvote: boolean,
	username: string
};

export type SubredditModel = {
	created_at: string,
	id: number,
	topic: string
}

export type PostModel = {
	body: string,
	created_at: string,
	id: number,
	image: string,
	subreddit_id: number,
	title: string,
	username: string,
	votes: Vote[],
	comments: Comment[],
	subreddits: Subreddit[]
}


