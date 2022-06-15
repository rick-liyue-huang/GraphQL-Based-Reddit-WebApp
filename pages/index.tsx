import type { NextPage } from 'next'
import Head from "next/Head";
import PostBoxComponent from "../components/PostBox";

const Home: NextPage = () => {
  return (
    <div className={'max-w-6xl mx-auto'}>
      <Head>
        <title>GraphQL based Reddit Webapp</title>
      </Head>
      {/* postBox */}
      <PostBoxComponent />
      <div>

      </div>
    </div>
  )
}

export default Home
