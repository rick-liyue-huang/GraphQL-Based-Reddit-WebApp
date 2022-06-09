import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HeaderComponent from "../components/Header";
import PostBoxComponent from "../components/PostBox";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>GraphQL Reddit Clone</title>
      </Head>
    {/* post box */}
      <PostBoxComponent />

      <div>
      {/* Feed */}
      </div>
    </div>
  )
}

export default Home
