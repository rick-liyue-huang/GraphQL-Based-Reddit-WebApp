import {ApolloClient, InMemoryCache} from "@apollo/client";

/**
 * @define this project has been wrapped in apollo client,
 * @type {ApolloClient<NormalizedCacheObject>}
 */
export const apolloClient = new ApolloClient({
	uri: `https://saintlazare.stepzen.net/api/clone-reddit-webapp/__graphql`,
	headers: {
		// run ` stepzen whoami --apikey` to get it or query from stepzen website
		Authorization: `Apikey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`
	},
	cache: new InMemoryCache()
});
