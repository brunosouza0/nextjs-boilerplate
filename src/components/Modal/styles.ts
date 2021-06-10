import { Close } from '@styled-icons/material-outlined'
import styled, { css } from 'styled-components'

import { ModalProps } from '.'

type WrapperProps = Pick<ModalProps, 'isOpen'>

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    display: ${isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${theme.layers.overlay};
    transition: opacity 0.3s ease-out;
    overflow: auto;

    animation-name: Fade;
    animation-duration: 0.4s;

    @keyframes Fade {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `}
`

export const Shadow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 50rem;
    min-height: 26rem;
    background-color: ${theme.colors.lightBg};
    border-radius: ${theme.border.radius};
    z-index: ${theme.layers.modal};
    position: relative;
    padding: ${theme.spacings.xsmall};
    margin: 3rem auto 0;

    animation-name: modalIn;
    animation-duration: 0.3s;

    @keyframes modalIn {
      0% {
        transform: translateY(200px);
      }
      100% {
        transform: translateY(0px);
      }
    }

    @media (max-width: ${theme.breakpoint.medium}) {
      width: 100%;
    }
  `}
`

export const CloseIcon = styled(Close)`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
  `}
`
