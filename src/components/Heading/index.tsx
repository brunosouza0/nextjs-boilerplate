import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  size?: 'small' | 'medium' | 'huge'
}

const Heading = ({ children, color = 'white', size = 'medium' }: HeadingProps) => (
  <S.Title size={size} color={color}>
    {children}
  </S.Title>
)

export default Heading
