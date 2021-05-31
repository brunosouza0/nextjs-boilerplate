import { Dispatch, SetStateAction, useEffect } from 'react'

import * as S from './styles'

export type ModalProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  children: React.ReactNode
}

const Modal = ({ isOpen, setIsOpen, children }: ModalProps) => {
  useEffect(() => {
    const escape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', escape)
    return () => {
      window.removeEventListener('keydown', escape)
    }
  }, [setIsOpen])

  return (
    <S.Wrapper isOpen={isOpen} aria-hidden={isOpen}>
      <S.Shadow onClick={() => setIsOpen(!isOpen)} />

      <S.Content>
        <S.CloseIcon size={28} onClick={() => setIsOpen(!isOpen)} />
        {children}
      </S.Content>
    </S.Wrapper>
  )
}

export default Modal
