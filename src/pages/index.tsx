import styled, { css } from 'styled-components'

const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`
const Index = () => <Title>Home</Title>

export default Index
