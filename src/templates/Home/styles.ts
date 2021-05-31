import styled, { css } from 'styled-components'

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 2.8rem;
  `}
`
