import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {SessionProvider} from "next-auth/react";
import HeaderComponent from "../components/Header";
import {ApolloProvider} from "@apollo/client";
import {apolloClient} from '../apollo-client';

// match with the backend RedditProvider in api/auth/[...nextauth].js
function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <SessionProvider session={session}>
        <div className={'h-screen overflow-y-scroll bg-green-100'}>
          <HeaderComponent />
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </ApolloProvider>

  )
}

export default MyApp
