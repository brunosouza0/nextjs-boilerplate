import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: max-content;
  position: relative;
`

export const Title = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.white};
    display: inline-flex;
    align-items: center;
    padding-right: 2.4rem;
    user-select: none;
  `}
`

type ContentProps = {
  isOpen: boolean
}

const contentModifiers = {
  open: () => css`
    opacity: 1;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `
}

export const Content = styled.div<ContentProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.lightBg};
    color: ${theme.colors.black};
    margin-top: ${theme.spacings.small};
    position: absolute;
    right: 0;
    transition: transform 0.2s ease-in, opacity 0.2s ease-out;

    &::after {
      content: '';
      position: absolute;
      border: 1.2rem solid transparent;
      border-bottom-color: ${theme.colors.lightBg};
      border-top-width: 0;
      top: -1.2rem;
      right: 1.2rem;
    }

    ${isOpen ? contentModifiers.open() : contentModifiers.close()}
  `}
`
