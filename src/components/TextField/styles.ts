import styled, { css, DefaultTheme } from 'styled-components'

import { TextFieldProps } from '.'

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.medium};
    position: absolute;
    top: 2.4rem;
    left: 1.5rem;
    color: ${theme.colors.gray};
    pointer-events: none;
    transition: all 0.2s ease-out;
  `}
`

type InputWrapperProps = { label: boolean }

export const InputWrapper = styled.div<InputWrapperProps>`
  ${({ theme, label }) => css`
    display: flex;
    padding: 0 1rem;
    border-radius: 2rem;
    border: 2px solid ${theme.colors.lightGray};
    background-color: ${theme.colors.lightGray};
    width: 100%;

    ${label &&
    css`
      margin-top: 1.8rem;
    `}
  `}
`

type InputProps = Required<Pick<TextFieldProps, 'labelColor'>>

export const Input = styled.input<InputProps>`
  ${({ theme, labelColor }) => css`
    border: none;
    outline: none;
    background: transparent;
    width: 100%;
    font-family: ${theme.font.family};
    font-size: 1.6rem;
    color: ${theme.colors.darkGray};

    &:focus + label,
    &:not([value='']) + label {
      top: 0;
      left: 0;
      color: ${theme.colors[labelColor]};
      font-size: ${theme.font.sizes.small};
    }

    &:disabled {
      cursor: not-allowed;
    }
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    height: 2.5rem;
    width: 2.5rem;
    color: ${theme.colors.gray};
    margin-left: 0.5rem;
  `}
`

type WrapperProps = Required<Pick<TextFieldProps, 'disabled' | 'fullWidth'>> & { error: boolean }

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }
    ${Label}, ${Input}, ${Icon} {
      color: ${theme.colors.red} !important;
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, error, fullWidth }) => css`
    display: inline-block;
    position: relative;
    min-width: 32rem;

    &:focus-within ${InputWrapper} {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    ${fullWidth &&
    css`
      width: 100%;
    `}

    ${disabled &&
    css`
      opacity: 0.7;
    `}

    ${error && wrapperModifiers.error(theme)}

@media(max-width: ${theme.breakpoint.small}) {
      min-width: 28rem;
    }
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.red};
    font-weight: ${theme.font.light};
  `}
`
