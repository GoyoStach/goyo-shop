import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { env } from "env.mjs";
import type { FC } from "react";
import type { ProductSimple } from "types/ProductSimple.type";

type Props = {
  data: ProductSimple;
};

const ProductIndividual: FC<Props> = ({ data }) => {
  console.log(data);
  return (
    <Center p={12}>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
        ]}
        role={"group"}
        p={6}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={[230, 230, 230, 230, 230 * 2]}
          justifyContent={"center"}
          display="flex"
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${
              data.attributes.images.data[0]?.attributes.url || ""
            }),url('/placeholder.jpg')`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={[230, 230, 230, 230, 230 * 2]}
            width={[282, 282, 282, 282, 282 * 2]}
            objectFit={"cover"}
            src={`${data.attributes.images.data[0]?.attributes.url || ""}`}
            alt={data.attributes.images.data[0]?.attributes.name}
            fallbackSrc={"/placeholder.jpg"}
          />
        </Box>
        <Stack p={6} align={"left"} textAlign={"justify"}>
          <Text
            color={"gray.500"}
            fontSize={"lg"}
            textTransform={"uppercase"}
            align={["center", "center", "center", "center", "left"]}
          >
            {data.attributes.brand}
          </Text>
          <Stack
            direction={"row"}
            align={"center"}
            justifyContent={["center", "center", "center", "center", "left"]}
          >
            <Text fontWeight={800} fontSize={"xl"}>
              {data.attributes.price} {data.attributes.currency}
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              {data.attributes.previousPrice} {data.attributes.currency}
            </Text>
          </Stack>
        </Stack>
        {/**Feature descriptions */}
        <GridItem colSpan={[1, 1, 1, 1, 2]} paddingY={[2, 4, 6, 8, 10]}>
          <Heading
            fontSize={"2xl"}
            fontWeight={500}
            justifyContent={"center"}
            display={"flex"}
          >
            Features
          </Heading>
        </GridItem>
        {data.attributes.details?.map((e) => {
          return (
            <Stack
              p={6}
              key={e.id}
              justifyContent={"center"}
              display={"flex"}
              alignItems={"center"}
            >
              <Text color={"gray.500"} fontSize={"lg"}>
                {e.value}
              </Text>
              <Image
                rounded={"lg"}
                height={[24, 24, 24, 36, 48]}
                width={[24, 24, 24, 36, 48]}
                objectFit={"cover"}
                src={e.icon}
                alt={e.value}
                fallbackSrc={"/placeholder.jpg"}
              />
            </Stack>
          );
        })}
      </Grid>
    </Center>
  );
};

export default ProductIndividual;
