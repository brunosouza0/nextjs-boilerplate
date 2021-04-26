import { InputHTMLAttributes, useState } from 'react'

import * as S from './styles'

export type CheckboxProps = {
  onCheck: (status: boolean) => void
  isCheck?: boolean
  label: string
  labelColor?: 'white' | 'black'
  labelFor: string
  labelPosition?: 'left' | 'right'
  toggle?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  onCheck,
  isCheck = false,
  label,
  labelColor = 'white',
  labelFor,
  labelPosition = 'right',
  toggle = false,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isCheck)

  const handleChange = (status: boolean) => {
    setChecked(status)
    onCheck(status)
  }

  return (
    <S.Wrapper labelPosition={labelPosition}>
      {toggle ? (
        <S.InputToggle
          type="checkbox"
          id={labelFor}
          checked={checked}
          onChange={(e) => handleChange(e.target.checked)}
          {...props}
        />
      ) : (
        <S.InputCheckbox
          type="checkbox"
          id={labelFor}
          checked={checked}
          onChange={(e) => handleChange(e.target.checked)}
          {...props}
        />
      )}

      <S.Label htmlFor={labelFor} labelColor={labelColor} labelPosition={labelPosition}>
        {label}
      </S.Label>
    </S.Wrapper>
  )
}

export default Checkbox
