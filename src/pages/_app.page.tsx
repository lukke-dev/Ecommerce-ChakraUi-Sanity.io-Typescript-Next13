import 'swiper/css'
import { store } from '@src/store'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { persistStore } from 'redux-persist'
import { ChakraProvider } from '@chakra-ui/react'
import { defaultTheme } from '@src/config/themes'
import { Provider as ReduxProvider } from 'react-redux'
import { DefaultLayout, EmptyLayout } from '@src/layouts'
import { PersistGate } from 'redux-persist/integration/react'

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  const Layout = ['ErrorPage', 'StudioPage'].includes(
    String(Component.displayName),
  )
    ? EmptyLayout
    : DefaultLayout
  return (
    <ChakraProvider theme={defaultTheme}>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en-US',
          url: 'https://ls-shop.netlify.app',
          siteName: 'LS Shop',
        }}
      />
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </ReduxProvider>
    </ChakraProvider>
  )
}
