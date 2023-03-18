import {
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  useColorMode,
  Center,
  Heading,
  Container
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { navVariants } from 'utils/motion'

import Link from 'next/link'

const Header = () => {
  /*
  const { data: sessionData } = useSession()

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  )

  return (
    <div>
      <p>
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? 'Sign out' : 'Sign in'}
      </button>
    </div>
  )*/

  const { colorMode, toggleColorMode } = useColorMode()

  const [isConnected, setIsConnected] = useState(false)

  const handleSignIn = () => {
    setIsConnected(!isConnected)
  }

  return (
    <Container
      p={2}
      maxW={'6xl'}
      textAlign="center"
    >
      <Flex
        as={motion.div}
        variants={navVariants}
        initial="hidden"
        whileInView={'show'}
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Link href={'/'}>
          <Heading>Goyo-Shop</Heading>
        </Link>

        <Flex alignItems={'center'}>
          <Stack
            direction={'row'}
            spacing={7}
          >
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>

            {isConnected ? (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar
                    color={colorMode === 'light' ? 'black' : 'white'}
                    size={'sm'}
                    name={'Goyo'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <Center>
                    <p>Goyo</p>
                  </Center>
                  <MenuDivider />
                  <MenuItem>Shop</MenuItem>
                  <MenuItem>About</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Button onClick={() => handleSignIn()}>Sign In</Button>
            )}
          </Stack>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Header
