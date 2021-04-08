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
