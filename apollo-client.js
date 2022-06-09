
// confirm the apollo client

import {ApolloClient, InMemoryCache} from "@apollo/client";

export const apolloClient = new ApolloClient({
	uri: 'https://saintlazare.stepzen.net/api/ulterior-whale/__graphql', // will get it after run `stepzen start`
	headers: {
		Authorization: `Apikey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}` // by runing ` stepzen whoami --apikey` or get from My StepZen page
	},
	cache: new InMemoryCache(),
});
