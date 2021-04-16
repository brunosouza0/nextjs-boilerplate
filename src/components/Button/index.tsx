import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonTypes = AnchorHTMLAttributes<HTMLAnchorElement> | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  color?: 'black' | 'white'
  bgColor?: 'primary' | 'secondary'
  fullWidth?: boolean
  minimal?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<HTMLButtonElement | HTMLAnchorElement, ButtonProps> = (
  {
    size = 'medium',
    color = 'white',
    bgColor = 'secondary',
    fullWidth = false,
    minimal = false,
    icon,
    iconPosition = 'left',
    children,
    ...props
  },
  ref
) => (
  <S.Button
    ref={ref}
    size={size}
    color={color}
    bgColor={bgColor}
    fullWidth={fullWidth}
    minimal={minimal}
    iconPosition={iconPosition}
    hasIcon={!!icon}
    {...props}>
    {!!icon && icon}
    <span>{children}</span>
  </S.Button>
)

export default forwardRef(Button)
