import { ReactNode, FC } from 'react'
import styled from 'styled-components'
import device from '../../../constants/device'

interface Props {
  className?: string
  columnLeftWidth: string
  backgroundLeft?: string
  backgroundRight?: string
  leftContent?: ReactNode
  rightContent?: ReactNode
  boxShadow?: boolean
  fullHeight?: boolean
}

const TwoColumnLayout: FC<Props> = ({
  className,
  columnLeftWidth,
  backgroundLeft,
  backgroundRight,
  leftContent,
  rightContent,
  boxShadow,
  fullHeight,
  ...props
}: Props) => {
  console.log(device)
  return (
    <>
      <Wrapper
        className={className}
        columnLeftWidth={columnLeftWidth}
        backgroundLeft={backgroundLeft}
        backgroundRight={backgroundRight}
        leftContent={leftContent}
        rightContent={rightContent}
        boxShadow={boxShadow}
        fullHeight={fullHeight}
        {...props}
      />
    </>
  )
}

const Wrapper = styled(({ className, leftContent, rightContent }: Props) => {
  return (
    <div className={className}>
      <>
        <LeftColumn content={leftContent} />
      </>
      <>
        <RightColumn content={rightContent} />
      </>
    </div>
  )
})`
  display: flex;
  height: ${({ fullHeight }) => (fullHeight ? '100vh' : null)};

  @media ${device.mobileL} {
    flex-direction: column;
  }

  & > div:first-child {
    flex: ${({ columnLeftWidth }) => columnLeftWidth}px 0 0;
    background: ${({ backgroundLeft }) => backgroundLeft};
    box-shadow: ${({ boxShadow }) =>
      boxShadow ? '10px -6px 25px rgba(0,0,0,0.16), -6px -3px 26px rgba(0,0,0,0.23)' : null};
    padding: 10px;
    z-index: 1;
  }

  & > div:last-child {
    flex: auto 1 0;
    background: ${({ backgroundRight }) => backgroundRight};
    padding: 10px;
  }
`

const LeftColumn = ({ content }: { content: ReactNode }) => <div className="left">{content}</div>
const RightColumn = ({ content }: { content: ReactNode }) => <div className="right">{content}</div>

export default TwoColumnLayout
