import { type NextPage } from 'next'
import Head from 'next/head'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Container,
  Flex,
  Heading,
  Spacer,
  useColorModeValue
} from '@chakra-ui/react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { zoomIn } from 'utils/motion'

import ProductIndividual from 'components/shop/ProductIndividual'
import Link from 'next/link'

import { mockDataWatchs } from 'mock'
import type { ProductSimple } from 'types/ProductSimple.type'

type Props = {
  data: ProductSimple
}

const IndividualProductPage: NextPage<Props> = ({ data }) => {
  const router = useRouter()
  const { id } = router.query

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

        <Container maxW={'6xl'}>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink
                as={Link}
                href={'/Shop'}
              >
                Shop
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">{data.name}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading>{id}</Heading>
        </Container>

        <Center
          as={motion.div}
          variants={zoomIn(0.1, 1)}
          initial="hidden"
          whileInView={'show'}
        >
          <ProductIndividual data={data} />
        </Center>
        <Spacer />
        <Footer />
      </Flex>
    </>
  )
}

export function getServerSideProps(context: unknown) {
  /**Here should happen data fetching to Stripe or the backend to get the right info concerning the product */
  const { id } = context.query

  const data = mockDataWatchs.find(e => e.name === id) || {
    imageSrc:
      'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    brand: 'Brand',
    name: 'Nice Chair, pink',
    price: 110,
    previousPrice: 240
  }
  return { props: { data } }
}

export default IndividualProductPage
