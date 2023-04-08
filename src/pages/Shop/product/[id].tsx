import { type NextPage } from "next";
import Head from "next/head";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
  Container,
  Flex,
  Heading,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import Header from "components/Header";
import Footer from "components/Footer";
import { motion } from "framer-motion";
import { zoomIn } from "utils/motion";

import ProductIndividual from "components/shop/ProductIndividual";
import Link from "next/link";
import type { ProductSimple } from "types/ProductSimple.type";
import { fetchQuery } from "utils/strapiAPI";

type Props = {
  data: ProductSimple;
};

const IndividualProductPage: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Shop</title>
        <meta name="Goyo - Shop" content="Shop products in the goyo-shop !" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        direction="column"
        minH={"calc(100vh)"}
        bgGradient={useColorModeValue(
          "linear(to-b, gray.300, gray.100, gray.300)",
          "linear(to-b, gray.900, gray.700, gray.900)"
        )}
      >
        <Header />
        <Spacer />

        <Container maxW={"6xl"}>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} href={"/Shop"}>
                Shop
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">{data.attributes.name}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading>{data.attributes.name}</Heading>
        </Container>

        <Center
          as={motion.div}
          variants={zoomIn(0.1, 1)}
          initial="hidden"
          whileInView={"show"}
        >
          <ProductIndividual data={data} />
        </Center>
        <Spacer />
        <Footer />
      </Flex>
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  /**Here should happen data fetching to Stripe or the backend to get the right info concerning the product */
  const { data }: { data: ProductSimple[] } = require("mock/Product.json");

  return {
    props: {
      data,
    },
  };
};

export default IndividualProductPage;
