import type { StyleFunctionProps} from '@chakra-ui/react';
import { createMultiStyleConfigHelpers} from '@chakra-ui/react';
import { withDefaultColorScheme} from '@chakra-ui/react';
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { menuAnatomy } from '@chakra-ui/anatomy'
import { mode } from '@chakra-ui/theme-tools';

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys)

  const baseStyle = definePartsStyle({
    list: {
      _dark:{
        bg:'expresso.800'
      },
      _light:{
        bg:'expresso.300'
      }
    },
    item: {
      _dark:{
        bg:'expresso.800'
      },
      _light:{
        bg:'expresso.300'
      }
    },
  });

  const menuTheme = defineMultiStyleConfig({ baseStyle });

  const components = {
    Menu: menuTheme,
  };
// 3. extend the theme
const theme = extendTheme(
  { 
  components, 
  config,
  colors: {  
    expresso: {
      DEFAULT: '#DCD7C9',
      50: '#F4F3EE',
      100: '#ECE9E2',
      200: '#DCD7C9',
      300: '#C6BEA7',
      400: '#B0A585',
      500: '#998B63',
      600: '#776C4D',
      700: '#554D37',
      800: '#332E21',
      900: '#11100B'
    }},

    styles: {
      global: (props: StyleFunctionProps) => ({
        body: { 
          color: mode('expresso.900', 'expresso.500')(props),
          bg: mode('expresso.200', 'expresso.900')(props),
        },
      }),
    },
},
withDefaultColorScheme({ colorScheme: 'expresso' }),
)

export default theme