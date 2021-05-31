import { InputHTMLAttributes, useState } from 'react'

import * as S from './styles'

export type TextFieldProps = {
  onInput: (value: string) => void
  label?: string
  labelColor?: 'black' | 'white'
  initialValue?: string
  icon?: React.ReactNode
  disabled?: boolean
  error?: string
  fullWidth?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  onInput,
  label,
  labelColor = 'black',
  initialValue = '',
  icon,
  disabled = false,
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
    <S.Wrapper disabled={disabled} error={!!error} fullWidth={fullWidth}>
      <S.InputWrapper label={!!label}>
        <S.Input
          type="text"
          labelColor={labelColor}
          disabled={disabled}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          {...props}
        />
        {!!label && <S.Label>{label}</S.Label>}
        {!!icon && <S.Icon>{icon}</S.Icon>}
      </S.InputWrapper>

      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
