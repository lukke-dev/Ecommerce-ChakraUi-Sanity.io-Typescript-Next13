'use client'
import 'swiper/css'
import { store } from '@src/store'
import { Navbar } from '@src/components'
import { persistStore } from 'redux-persist'
import { defaultTheme } from '@/config/themes'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

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
          <ChakraProvider theme={defaultTheme}>
            <ReduxProvider store={store}>
              <PersistGate loading={null} persistor={persistStore(store)}>
                <Navbar />
                {children}
                <footer>footer</footer>
              </PersistGate>
            </ReduxProvider>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
