import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme'
import GlobalStyles from '../src/styles/global'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

export const decorators = [
  (Story) => (
    <>
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
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg/>
      <Story />
    </ThemeProvider>
    </>
  )
]
