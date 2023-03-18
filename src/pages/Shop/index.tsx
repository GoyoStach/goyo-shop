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
import type { ProductSimple } from 'types/ProductSimple.type'
import { motion } from 'framer-motion'
import { zoomIn } from 'utils/motion'

const mockDataChairs: ProductSimple[] = [
  {
    imageSrc:
      'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    brand: 'Brand',
    name: 'Nice Chair, pink',
    price: 110,
    previousPrice: 240
  },
  {
    imageSrc:
      'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    brand: 'Brand',
    name: 'Nice Chair, pink',
    price: 110,
    previousPrice: 240
  },
  {
    imageSrc:
      'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    brand: 'Brand',
    name: 'Nice Chair, pink',
    price: 110,
    previousPrice: 240
  },
  {
    imageSrc:
      'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    brand: 'Brand',
    name: 'Nice Chair, pink',
    price: 110,
    previousPrice: 240
  },
  {
    imageSrc:
      'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    brand: 'Brand',
    name: 'Nice Chair, pink',
    price: 110,
    previousPrice: 240
  },
  {
    imageSrc:
      'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    brand: 'Brand',
    name: 'Nice Chair, pink',
    price: 110,
    previousPrice: 240
  },
  {
    imageSrc:
      'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    brand: 'Brand',
    name: 'Nice Chair, pink',
    price: 110,
    previousPrice: 240
  }
]
const mockDataWatchs: ProductSimple[] = [
  {
    imageSrc:
      'https://i.ebayimg.com/images/g/x5IAAOSwC3Fizdlg/s-l1600.jpg?auto=format&fit=crop&w=1350&q=80',
    brand: 'Watch',
    name: 'MoonSwatch, Mission to Pluto',
    price: 110,
    previousPrice: 240
  },
  {
    imageSrc:
      'https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHw%3D&w=1000&q=80',
    brand: 'Watch',
    name: 'Rolex, Full flex',
    price: 110,
    previousPrice: 240
  }
]

const Shop: NextPage = () => {
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
          <Heading>Chairs</Heading>
        </Center>
        <ProductGrid data={mockDataChairs} />
        <Spacer />
        <Center
          as={motion.div}
          variants={zoomIn(0.1, 1)}
          initial="hidden"
          whileInView={'show'}
        >
          <Heading>Watchs</Heading>
        </Center>
        <ProductGrid data={mockDataWatchs} />
        <Spacer />

        <Footer />
      </Flex>
    </>
  )
}

export default Shop
