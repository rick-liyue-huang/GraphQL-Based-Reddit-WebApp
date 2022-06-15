
import NextAuth from "next-auth"
import RedditProvider from "next-auth/providers/reddit";


/**
 * @define in the backend api file, I create the next auth provider to connect with Reddit account
 */
export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		RedditProvider({
			clientId: process.env.REDDIT_CLIENT_ID,
			clientSecret: process.env.REDDIT_CLIENT_SECRET
		})
	],
})
