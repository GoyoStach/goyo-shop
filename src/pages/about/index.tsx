import { type NextPage } from 'next'
import Head from 'next/head'

import { Divider, Flex, Spacer, useColorModeValue } from '@chakra-ui/react'
import Header from 'components/Header'
import Footer from 'components/Footer'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shop</title>
        <meta
          name="Goyo - Shop"
          content="Shop products in the goyo-shop !"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Flex
        direction="column"
        minH={'calc(100vh)'}
        bgGradient={useColorModeValue(
          'linear(to-b, gray.300, gray.100, gray.300)',
          'linear(to-b, gray.900, gray.700, gray.900)'
        )}
      >
        <Header />
        <Divider
          w={'xl'}
          mx="auto"
        />
        <Spacer />
        {/**Content */}
        <Spacer />
        <Divider
          w={'xl'}
          mx="auto"
        />
        <Footer />
      </Flex>
    </>
  )
}

export default About
