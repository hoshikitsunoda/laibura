import { FC } from 'react'

import TwoColumnLayout from './components/Layout/TwoColumnLayout'

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
        backgroundLeft="yellow"
        backgroundRight="lime"
        leftContent={<LeftContent />}
        rightContent={<RightContent />}
        boxShadow={true}
        fullHeight={true}
      />
    </>
  )
}

const LeftContent = () => (
  <>
    <header>My Blog</header>
    <nav>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#archive">Archive</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </>
)
const RightContent = () => (
  <>
    {[1, 2, 3].map((item) => (
      <div key={item} style={{ height: '200px', backgroundColor: 'tomato', margin: '1rem' }}>
        <h1>Content {item}</h1>
      </div>
    ))}
  </>
)

export default App
