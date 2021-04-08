import { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import GlobalStyle from 'styles/global'

import NextNprogress from 'nextjs-progressbar'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'pt-BR',
          site_name: 'Next.js Boilerplate'
        }}
      />
      <NextNprogress color={theme.colors.primary} startPosition={0.3} stopDelayMs={200} height={3} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
