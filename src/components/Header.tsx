import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import type { ReactNode } from 'react'
import { useState } from 'react'

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700')
    }}
    href={'#'}
  >
    {children}
  </Link>
)

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
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [isConnected, setIsConnected] = useState(false)

  const handleSignIn = () => {
    setIsConnected(!isConnected)
  }

  return (
    <>
      <Box px={4}>
        <Flex
          h={16}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Box>Logo</Box>

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
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}
                  >
                    <Avatar
                      size={'sm'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </MenuButton>
                  <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                      <Avatar
                        size={'2xl'}
                        src={
                          'https://avatars.dicebear.com/api/male/username.svg'
                        }
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Username</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Your Servers</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem>Logout</MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <Button onClick={() => handleSignIn()}>Sign In</Button>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Header
