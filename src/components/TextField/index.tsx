import { InputHTMLAttributes, useState } from 'react'

import * as S from './styles'

export type TextFieldProps = {
  onInput: (value: string) => void
  label?: string
  labelFor?: string
  labelColor?: 'black' | 'white'
  bgColor?: 'darkGray' | 'white'
  initialValue?: string
  error?: string
  fullWidth?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  onInput,
  label,
  labelFor,
  labelColor = 'black',
  bgColor = 'white',
  initialValue = '',
  error,
  fullWidth = false,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (newValue: string) => {
    setValue(newValue)
    onInput(newValue)
  }

  return (
    <S.Wrapper fullWidth={fullWidth}>
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
      <S.Input
        id={labelFor}
        type="rext"
        bgColor={bgColor}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        error={!!error}
        {...props}
      />
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
