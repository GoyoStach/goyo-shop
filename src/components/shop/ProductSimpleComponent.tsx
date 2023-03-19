import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image
} from '@chakra-ui/react'
import Link from 'next/link'
import type { FC } from 'react'
import type { ProductSimple } from 'types/ProductSimple.type'

type Props = {
  data: ProductSimple
}

const ProductSimpleComponent: FC<Props> = ({ data }) => {
  return (
    <Center py={12}>
      <Link href={{ pathname: `/Shop/product/${data.name}` }}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
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
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${data.imageSrc})`,
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
              height={230}
              width={282}
              objectFit={'cover'}
              src={data.imageSrc}
              alt={data.name}
            />
          </Box>
          <Stack
            pt={10}
            align={'center'}
            textAlign={'center'}
          >
            <Text
              color={'gray.500'}
              fontSize={'sm'}
              textTransform={'uppercase'}
            >
              {data.brand}
            </Text>
            <Heading
              fontSize={'2xl'}
              fontFamily={'body'}
              fontWeight={500}
            >
              {data.name}
            </Heading>
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
          </Stack>
        </Box>
      </Link>
    </Center>
  )
}

export default ProductSimpleComponent
