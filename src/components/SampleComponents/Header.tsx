import { FC } from 'react'
import styled from 'styled-components'

import Button from '../atoms/Button'
import Input from '../atoms/Input'
import Heading from '../atoms/Heading'
interface Props extends StyleProps {
  title: string
}

interface StyleProps {
  direction: string
  color: string
}

const Header: FC<Props> = ({ title, direction, color }: Props) => {
  return (
    <StyledHeader direction={direction} color={color}>
      <Heading text={title} variant="h2" align="center" color="primary" />
      <Button type="button" color="secondary">
        Click here
      </Button>
      <Input fullWidth type="text" autoFocus placeholder="Search..." />
    </StyledHeader>
  )
}

const StyledHeader = styled.header<StyleProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
`

export default Header
