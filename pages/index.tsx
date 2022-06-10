import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HeaderComponent from "../components/Header";
import PostBoxComponent from "../components/PostBox";
import FeedComponent from "../components/Feed";

const Home: NextPage = () => {
  return (
    <div className="max-w-5xl my-7 mx-auto ">
      <Head>
        <title>GraphQL Reddit Clone</title>
      </Head>
    {/* post box */}
      <PostBoxComponent />

      <div className={'flex'}>
      <FeedComponent />
      </div>
    </div>
  )
}

export default Home
