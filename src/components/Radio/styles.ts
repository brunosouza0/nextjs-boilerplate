import styled, { css } from 'styled-components'

import { RadioProps } from '.'

type WrapperProps = Required<Pick<RadioProps, 'labelPosition'>>

export const Wrapper = styled.div<WrapperProps>`
  ${({ labelPosition }) => css`
    display: inline-flex;
    align-items: center;

    ${labelPosition === 'left' &&
    css`
      flex-direction: row-reverse;
    `}
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    appearance: none;
    height: 1.8rem;
    width: 1.8rem;
    border: 2px solid ${theme.colors.gray};
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    transition: all 0.2s ease-out;

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &::after {
      content: '';
      position: absolute;
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      background-color: ${theme.colors.primary};
      opacity: 0;
      transition: all 0.2s ease-out;
    }

    &:checked {
      border: 2px solid ${theme.colors.primary};
      &::after {
        opacity: 1;
      }
    }
  `}
`

type LabelProps = Required<Pick<RadioProps, 'labelColor' | 'labelPosition'>>

export const Label = styled.label<LabelProps>`
  ${({ theme, labelColor, labelPosition }) => css`
    color: ${theme.colors[labelColor]};
    font-size: 1.6rem;
    line-height: 1.6rem;
    cursor: pointer;

    ${labelPosition === 'right'
      ? css`
          padding-left: 1rem;
        `
      : css`
          padding-right: 1rem;
        `}
  `}
`
