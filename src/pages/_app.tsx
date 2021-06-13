import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import NextNprogress from 'nextjs-progressbar'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/global'
import theme from 'styles/theme'

import SEO from '../../next-seo.config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <NextNprogress color={theme.colors.primary} startPosition={0.3} stopDelayMs={200} height={3} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
