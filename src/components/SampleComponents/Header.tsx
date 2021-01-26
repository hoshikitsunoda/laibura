import { FC } from 'react'
import styled from 'styled-components'

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
      <h2>{title}</h2>
    </StyledHeader>
  )
}

const StyledHeader = styled.header<StyleProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};

  > h2 {
    text-align: center;
    color: ${({ color }) => color};
    font-weight: 600;
  }
`

export default Header
