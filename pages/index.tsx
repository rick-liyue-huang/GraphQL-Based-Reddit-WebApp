import type { NextPage } from 'next'
import Head from "next/Head";
import PostBoxComponent from "../components/PostBox";
import FeedComponent from "../components/Feed";

const Home: NextPage = () => {
  return (
    <div className={'max-w-6xl mx-auto'}>
      <Head>
        <title>GraphQL based Reddit Webapp</title>
      </Head>
      {/* postBox */}
      <PostBoxComponent />

      {/* feed */}
      <div className={'flex'}>
        <FeedComponent />
      </div>
    </div>
  )
}

export default Home
