import { type NextPage } from 'next'
import Head from 'next/head'

import { Center, Container } from '@chakra-ui/react'
import Header from '../components/Header'
import Masthead from '../components/Masthead'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>New App</title>
        <meta
          name="New application"
          content="New application using goyo-boilerplate"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <Container
        maxW={'3xl'}
        h="calc(100vh)"
      >
        <Header />
        <Center h={'100%'}>
          <Masthead />
        </Center>
      </Container>
    </>
  )
}

export default Home
