import { InputHTMLAttributes } from 'react'
import * as S from './styles'

export type RadioProps = {
  onCheck: (value?: string | number) => void
  label: string
  labelColor?: 'black' | 'white'
  labelFor: string
  value: string | number
  name: string
  labelPosition?: 'right' | 'left'
} & InputHTMLAttributes<HTMLInputElement>

const Radio = ({
  onCheck,
  label,
  labelColor = 'white',
  labelFor,
  value,
  name,
  labelPosition = 'right',
  ...props
}: RadioProps) => {
  const handleChange = () => {
    onCheck(value)
  }

  return (
    <S.Wrapper labelPosition={labelPosition}>
      <S.Input id={labelFor} type="radio" onChange={handleChange} name={name} {...props} />
      <S.Label htmlFor={labelFor} labelColor={labelColor} labelPosition={labelPosition}>
        {label}
      </S.Label>
    </S.Wrapper>
  )
}

export default Radio
