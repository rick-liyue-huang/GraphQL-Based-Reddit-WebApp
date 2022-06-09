import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HeaderComponent from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>GraphQL Reddit Clone</title>
      </Head>
      <HeaderComponent />
    </div>
  )
}

export default Home
