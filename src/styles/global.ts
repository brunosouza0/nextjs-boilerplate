import { createGlobalStyle, css, DefaultTheme } from 'styled-components'

type GlobalStyleProps = {
  removeBg?: boolean
}

const globalStyleModifiers = {
  bg: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.mainBg};
  `
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    src: local('Poppins Light'), local('Poppins-Light'), url('/fonts/poppins-v15-latin-300.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: local('Poppins Regular'), local('Poppins-Regular '), url('/fonts/poppins-v15-latin-regular.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'), url('/fonts/poppins-v15-latin-600.woff2') format('woff2');
    font-display: swap;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    ${({ theme, removeBg }) => css`
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      ${!removeBg && globalStyleModifiers.bg(theme)}
    `}
  }
`

export default GlobalStyle
