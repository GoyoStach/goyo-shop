import { type NextPage } from "next";
import Head from "next/head";

import { Flex, Spacer, useColorModeValue } from "@chakra-ui/react";
import Header from "components/Header";
import Footer from "components/Footer";
import ProductGrid from "components/shop/ProductGrid";
import type { ProductSimple } from "types/ProductSimple.type";
import { fetchQuery } from "utils/strapiAPI";

type Props = {
  data: ProductSimple[];
};

const Shop: NextPage<Props> = ({ data }) => {
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

        <ProductGrid data={data} />
        <Spacer />
        <Footer />
      </Flex>
    </>
  );
};

export const getServerSideProps = async () => {
  /**Here should happen data fetching to Stripe or the backend to get the right info concerning the product */
  const { data }: { data: ProductSimple[] } = require("mock/Shop.json");

  return {
    props: {
      data,
    },
  };
};

export default Shop;
