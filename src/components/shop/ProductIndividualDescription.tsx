import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image
} from '@chakra-ui/react'
import type { FC } from 'react'
import type { ProductSimple } from 'types/ProductSimple.type'

const data = {
  imageSrc:
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
  brand: 'Brand',
  name: 'Nice Chair, pink',
  price: 110,
  previousPrice: 240
}

const ProductIndividualDescription: FC = () => {
  return (
    <Center p={12}>
      <Box
        role={'group'}
        p={6}
        w={'full'}
        maxW={'500px'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Stack
          align={'center'}
          textAlign={'justify'}
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
    </Center>
  )
}

export default ProductIndividualDescription
