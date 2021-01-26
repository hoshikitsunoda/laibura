import { FC } from 'react'

import * as Color from './constants/colors'
import { TwoColumnLayout } from './components/Layout'
import { LeftContent, RightContent } from './components/Layout/TwoColumnLayout/Example'

/*
create a component to set props and pass to each child component
ie. Setting component sets {state} which holds all settings and pass to Layout
*/

const App: FC = () => {
  return (
    <>
      <TwoColumnLayout
        className="main"
        columnLeftWidth="200"
        backgroundLeft={Color.NAVY}
        backgroundRight={Color.MAIN}
        leftContent={<LeftContent />}
        rightContent={<RightContent />}
        boxShadow={true}
        fullHeight={true}
      />
    </>
  )
}

export default App
