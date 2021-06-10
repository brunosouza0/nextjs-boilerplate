import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme'
import GlobalStyles from '../src/styles/global'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.colors.lightBg,
      },
      {
        name: 'dark',
        value: theme.colors.mainBg,
      },
    ],
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg/>
      <Story />
    </ThemeProvider>
  )
]
