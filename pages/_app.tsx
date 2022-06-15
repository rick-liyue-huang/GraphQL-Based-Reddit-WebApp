import '../styles/globals.css'
import type { AppProps } from 'next/app';
import {SessionProvider} from "next-auth/react";
import HeaderComponent from "../components/Header";
import {ApolloProvider} from "@apollo/client";
import {apolloClient} from '../apollo-client';


/**
 * @define need to wrap the whole project in auth-next application by sessionProvider
 * @param Component
 * @param session
 * @param pageProps
 * @constructor
 */
function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      {/* the whole project is in apollo client */}
      <SessionProvider session={session}>
        <div className={'h-screen overflow-y-scroll scroll-auto bg-green-100'}>
          {/* here the whole project can use session as auth entry */}
          <HeaderComponent />
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </ApolloProvider>

  )
}

export default MyApp
