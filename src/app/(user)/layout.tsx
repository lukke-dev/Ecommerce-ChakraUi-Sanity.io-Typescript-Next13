'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { defaultTheme } from '@/config/themes'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>LS shop</title>
        <meta title="description" content="Buy anything online" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="shopping_cart.png"
        />
      </head>
      <body>
        <CacheProvider>
          <ChakraProvider theme={defaultTheme}>{children}</ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}