import styled, { css, DefaultTheme } from 'styled-components'

import { HeadingProps } from '.'

type TitleProps = Required<Pick<HeadingProps, 'color' | 'size'>>

const titleModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};

    @media (max-width: ${theme.breakpoint.medium}) {
      font-size: ${theme.font.sizes.xlarge};
    }
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `
}

export const Title = styled.h3<TitleProps>`
  ${({ theme, color, size }) => css`
    font-family: ${theme.font.family};
    color: ${theme.colors[color]};

    ${!!size && titleModifiers[size](theme)}
  `}
`
