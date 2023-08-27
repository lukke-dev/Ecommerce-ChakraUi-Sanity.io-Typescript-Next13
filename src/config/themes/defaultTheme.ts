import { extendTheme } from '@chakra-ui/react'

export const defaultTheme = extendTheme({
  styles: {
    global: {
      '.StripeCheckout': {
        w: 'full',
        color: 'white',
        cursor: 'pointer',
        rounded: 'full !important',
        background: 'pink.500 !important',

        span: {
          background: 'pink.500 !important',
        },
      },
    },
  },
})
