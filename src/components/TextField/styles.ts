import { rgba } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'

import { TextFieldProps } from '.'

type WrapperProps = Required<Pick<TextFieldProps, 'fullWidth'>>

export const Wrapper = styled.div<WrapperProps>`
  ${({ fullWidth }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 32rem;
    width: max-content;

    ${fullWidth &&
    css`
      width: 100%;
    `}
  `}
`

type LabelProps = Required<Pick<TextFieldProps, 'labelColor'>>

export const Label = styled.label<LabelProps>`
  ${({ theme, labelColor }) => css`
    color: ${theme.colors[labelColor]};
    font-size: ${theme.font.sizes.small};
    margin-bottom: 0.4rem;
    cursor: pointer;
  `}
`
type InputProps = Required<Pick<TextFieldProps, 'bgColor'>> & { error: boolean }

const inputModifiers = {
  error: (theme: DefaultTheme) => css`
    color: ${theme.colors.red};
    border: 1px solid ${theme.colors.red} !important;
  `
}

export const Input = styled.input<InputProps>`
  ${({ theme, bgColor, error }) => css`
    font-family: inherit;
    background-color: ${theme.colors[bgColor]};
    border: 1px solid transparent;
    border-radius: ${theme.border.radius};
    caret-color: #02e7f5;
    color: ${bgColor === 'darkGray' ? theme.colors.white : theme.colors.black};
    font-size: ${theme.font.sizes.medium};
    height: 4.8rem;
    line-height: 1.5;
    outline: none;
    padding: 0.7rem 1.2rem;
    transition: all 0.1s ease;
    width: 100%;

    &:focus {
      border: 1px solid ${rgba(theme.colors.primary, 0.4)};
    }

    &::placeholder {
      color: ${bgColor === 'darkGray' ? theme.colors.white : theme.colors.black};
      font-weight: ${theme.font.light};
      opacity: 0.6;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: ${theme.colors.lightGray};

      &::placeholder {
        color: ${theme.colors.black};
      }
    }

    ${error && inputModifiers.error(theme)}
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`
