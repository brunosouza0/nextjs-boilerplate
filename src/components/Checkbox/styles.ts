import styled, { css } from 'styled-components'

import { CheckboxProps } from '.'

type WrapperProps = Required<Pick<CheckboxProps, 'labelPosition'>>

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

export const InputCheckbox = styled.input`
  ${({ theme }) => css`
    appearance: none;
    cursor: pointer;
    outline: none;
    height: 1.8rem;
    width: 1.8rem;
    border: 0.2rem solid ${theme.colors.gray};
    border-radius: ${theme.border.radius};
    position: relative;
    transition: all 0.2 ease-out;

    &::after {
      content: '';
      position: absolute;
      top: 0.1rem;
      left: 0.4rem;
      height: 0.9rem;
      width: 0.5rem;
      border: 0.2rem solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      opacity: 0;
      transition: opacity 0.2s ease-out;
    }

    &:checked {
      background-color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
      &::after {
        opacity: 1;
      }
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const InputToggle = styled.input`
  ${({ theme }) => css`
    appearance: none;
    cursor: pointer;
    outline: none;
    height: 1.8rem;
    width: 3.5rem;
    border-radius: 1.5rem;
    background-color: ${theme.colors.lightGray};
    position: relative;
    transition: background-color 0.2s ease-out;

    &::after {
      content: '';
      position: absolute;
      top: 0.2rem;
      left: 0.4rem;
      height: 1.4rem;
      width: 1.4rem;
      border-radius: 50%;
      background-color: ${theme.colors.white};
      box-shadow: 0.1rem 0.1rem 0.3rem 0.1rem rgba(0, 0, 0, 0.5);
      transition: transform 0.2s ease-out;
    }

    &:checked {
      background-color: ${theme.colors.primary};

      &::after {
        transform: translateX(1.2rem);
      }
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

type labelProps = Required<Pick<CheckboxProps, 'labelColor' | 'labelPosition'>>

export const Label = styled.label<labelProps>`
  ${({ theme, labelColor, labelPosition }) => css`
    color: ${theme.colors[labelColor]};
    line-height: 1.6rem;
    user-select: none;
    cursor: pointer;

    ${labelPosition === 'right'
      ? css`
          padding-left: ${theme.spacings.xxsmall};
        `
      : css`
          padding-right: ${theme.spacings.xxsmall};
        `}
  `}
`
