import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Grid
} from '@chakra-ui/react'
import { env } from 'env.mjs'
import type { FC } from 'react'
import type { ProductSimple } from 'types/ProductSimple.type'

type Props = {
  data: ProductSimple
}

const ProductIndividual: FC<Props> = ({ data }) => {
  return (
    <Center p={12}>
      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(2, 1fr)'
        ]}
        role={'group'}
        p={6}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={[230, 230, 230, 230, 230 * 2]}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${env.NEXT_PUBLIC_BACKEND_URL}${
              data.attributes.images.data[0]?.attributes.url || ''
            })`,
            filter: 'blur(15px)',
            zIndex: -1
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)'
            }
          }}
        >
          <Image
            rounded={'lg'}
            height={[230, 230, 230, 230, 230 * 2]}
            width={[282, 282, 282, 282, 282 * 2]}
            objectFit={'cover'}
            src={`${env.NEXT_PUBLIC_BACKEND_URL}${
              data.attributes.images.data[0]?.attributes.url || ''
            }`}
            alt={data.attributes.images.data[0]?.attributes.name}
          />
        </Box>
        <Stack
          p={6}
          align={'left'}
          textAlign={'justify'}
        >
          <Text
            color={'gray.500'}
            fontSize={'sm'}
            textTransform={'uppercase'}
            align={['center', 'center', 'center', 'left']}
          >
            {data.attributes.brand}
          </Text>
          <Heading
            fontSize={'2xl'}
            fontFamily={'body'}
            fontWeight={500}
          >
            {data.attributes.name}
          </Heading>
          {/**
          <Stack
            direction={'row'}
            align={'center'}
          >
            <Text
              fontWeight={800}
              fontSize={'xl'}
            >
              {data.price} €
            </Text>
            <Text
              textDecoration={'line-through'}
              color={'gray.600'}
            >
              {data.previousPrice} €
            </Text>
          </Stack>
           */}
        </Stack>
      </Grid>
    </Center>
  )
}

export default ProductIndividual
