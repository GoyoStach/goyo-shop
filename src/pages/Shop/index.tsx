import type { GetServerSideProps } from 'next'
import { type NextPage } from 'next'
import Head from 'next/head'

import {
  Center,
  Flex,
  Heading,
  Spacer,
  useColorModeValue
} from '@chakra-ui/react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ProductGrid from 'components/shop/ProductGrid'
import { motion } from 'framer-motion'
import { zoomIn } from 'utils/motion'
import { mockDataChairs, mockDataWatchs } from 'mock'
import type { ProductSimple } from 'types/ProductSimple.type'

type Props = {
  data: {
    mockDataChairs: ProductSimple[]
    mockDataWatchs: ProductSimple[]
  }
}

const Shop: NextPage<Props> = ({ data }) => {
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

        <Spacer />
        <Center
          as={motion.div}
          variants={zoomIn(0.1, 1)}
          initial="hidden"
          whileInView={'show'}
        >
          <Heading>Chaises</Heading>
        </Center>
        <ProductGrid data={data.mockDataChairs} />
        <Spacer />
        <Center
          as={motion.div}
          variants={zoomIn(0.1, 1)}
          initial="hidden"
          whileInView={'show'}
        >
          <Heading>Montres</Heading>
        </Center>
        <ProductGrid data={data.mockDataWatchs} />
        <Spacer />
        <Footer />
      </Flex>
    </>
  )
}

export const getServerSideProps = (context: any) => {
  /**Here should happen data fetching to Stripe or the backend to get the right info concerning the product */
  const { id } = context.query

  const data = { mockDataWatchs, mockDataChairs }

  return { props: { data } }
}

export default Shop
