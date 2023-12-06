import { extendTheme } from 'native-base'

export const THEME = extendTheme({
  colors: {
    green: {
      700: '#00875F',
      600: '#006640',
      500: '#00B37E',
      400: '#59cc01',
    },
    blue: {
      700: '#141f25',
    },
    purple: {
      300: '#8f69cc',
    },
    gray: {
      700: '#121214',
      600: '#202024',
      500: '#36474f',
      400: '#38464f',
      300: '#3b4850',
      200: '#C4C4CC',
      100: '#E1E1E6',
    },
    white: '#FFFFFF',
    red: {
      500: '#F75A68',
    },
  },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  sizes: {
    14: 56,
    33: 148,
  },
})
