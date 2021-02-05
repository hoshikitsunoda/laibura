import { FC } from 'react'
import styled from 'styled-components'

import { handleColor, handleActiveColor, handleButtonSize } from '../../../utils/handleStyle'

interface Props extends StyleProps {
  type: 'button' | 'submit' | 'reset' | undefined
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

interface StyleProps {
  size?: string
  color?: string
}

const Button: FC<Props> = styled(({ type, onClick, children, className, disabled }: Props) => {
  return (
    <button type={type} onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  )
})`
  padding: ${({ size }) => handleButtonSize(size)};
  background-color: ${({ color }) => handleColor(color)};
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ color }) => handleActiveColor(color)};
  }
`

export default Button
