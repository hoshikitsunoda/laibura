import { FC } from 'react'
import styled from 'styled-components'

import * as Color from '../../../constants/colors'

interface Props extends StyleProps {
  type: 'text' | 'submit'
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  autoFocus: boolean
  placeholder?: string
}

interface StyleProps {
  fullWidth?: boolean
}

const Input: FC<Props> = styled(({ type, onChange, className, autoFocus, placeholder }: Props) => {
  return <input type={type} onChange={onChange} className={className} autoFocus={autoFocus} placeholder={placeholder} />
})`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  padding: 0.8rem;
  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;

  &:focus {
    border: 1px solid ${Color.BLUE};
  }
`

export default Input
