import { FC } from 'react'
import styled from 'styled-components'

interface Props extends StyleProps {
  menuItems: string[]
}

interface StyleProps {
  color: string
}

const Menu: FC<Props> = ({ menuItems, color }: Props) => {
  return (
    <Wrapper color={color} className="menu">
      {menuItems.map((menu) => (
        <li key={menu} className="menu__item">
          <a href={`#${menu}`} className="menu__link">
            {menu}
          </a>
        </li>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled(({ className, children }) => {
  return <ul className={className}>{children}</ul>
})`
  list-style: none;
  padding: 0;
  text-align: center;
  > li {
    margin-bottom: 1rem;
    > a {
      color: ${({ color }) => color};
      text-decoration: none;
    }
  }
`

export default Menu
