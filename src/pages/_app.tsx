import { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import GlobalStyle from 'styles/global'

import NextNprogress from 'nextjs-progressbar'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'pt-BR',
          site_name: 'Next.js Boilerplate'
        }}
      />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <NextNprogress color={theme.colors.primary} startPosition={0.3} stopDelayMs={200} height={3} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
