import { type NextPage } from 'next'
import Head from 'next/head'
import { signIn, signOut, useSession } from 'next-auth/react'

import { api } from '../utils/api'
import { Button, Container, useColorMode } from '@chakra-ui/react'
import Header from '../components/Header'

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: 'from tRPC' })
  const { colorMode, toggleColorMode } = useColorMode()

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

      <Container maxW={'3xl'}>
        <Header />
        <div>
          <h1>
            Create <span>T3</span> App
          </h1>

          <div>
            <p>{hello.data ? hello.data.greeting : 'Loading tRPC query...'}</p>
          </div>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button>
        </div>
      </Container>
    </>
  )
}

export default Home

