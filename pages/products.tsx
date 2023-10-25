import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nossos produtos</title>
        <meta name="description" content="Conheça todos os produtos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Nossos produtos</h1>
    </>
  )
}

export default Home
