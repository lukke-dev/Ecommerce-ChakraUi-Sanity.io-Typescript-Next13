'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { defaultTheme } from '@/config/themes/defaultTheme'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CacheProvider>
          <ChakraProvider theme={defaultTheme}>{children}</ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
