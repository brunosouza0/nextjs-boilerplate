import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import theme from 'styles/theme'

const isProd = process.env.NODE_ENV === 'production'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content={theme.colors.primary} />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                @font-face {
                  font-family: 'Poppins';
                  font-style: normal;
                  font-weight: 300;
                  src: url('/fonts/poppins-v15-latin-300.woff2') format('woff2');
                  font-display: swap;
                }
                @font-face {
                  font-family: 'Poppins';
                  font-style: normal;
                  font-weight: 400;
                  src: url('/fonts/poppins-v15-latin-regular.woff2') format('woff2');
                  font-display: swap;
                }
                @font-face {
                  font-family: 'Poppins';
                  font-style: normal;
                  font-weight: 600;
                  src: url('/fonts/poppins-v15-latin-600.woff2') format('woff2');
                  font-display: swap;
                }
              `
            }}
          />
          {isProd && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.GA_TRACKING}', {
                  page_path: window.location.pathname
                });
              `
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
