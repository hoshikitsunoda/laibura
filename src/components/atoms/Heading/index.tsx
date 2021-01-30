import { FC } from 'react'
import styled from 'styled-components'

import { handleTextColor } from '../../../utils/handleStyle'

interface Props extends StyleProps {
  text: string
  variant?: string
  className?: string
}

interface StyleProps {
  align?: string
  color?: string
}

const Heading: FC<Props> = styled(({ text, variant, className }: Props) => {
  let heading
  switch (variant) {
    case 'h1':
      heading = <h1 className={className}>{text}</h1>
      break
    case 'h2':
      heading = <h2 className={className}>{text}</h2>
      break
    case 'h3':
      heading = <h3 className={className}>{text}</h3>
      break
    case 'h4':
      heading = <h4 className={className}>{text}</h4>
      break
    default:
      heading = <h2 className={className}>{text}</h2>
  }

  return <>{heading}</>
})`
  text-align: ${({ align }) => align};
  color: ${({ color }) => handleTextColor(color)};
`

export default Heading
