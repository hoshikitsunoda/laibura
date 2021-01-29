import { FC } from 'react'
import styled from 'styled-components'

interface Props extends StyleProps {
  type: 'text' | 'submit'
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  autoFocus: boolean
}

interface StyleProps {
  fullWidth?: boolean
}

const Input: FC<Props> = styled(({ type, onChange, className, autoFocus }: Props) => {
  return <input type={type} onChange={onChange} className={className} autoFocus={autoFocus} />
})`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  padding: 0.8rem;
  border-radius: 5px;
`

export default Input
