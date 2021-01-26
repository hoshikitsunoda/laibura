import { FC } from 'react'

import { Header, Menu } from '../../../components/SampleComponents'
import * as Color from '../../../constants/colors'

export const LeftContent: FC = () => (
  <>
    <Header title={'My Blog'} direction={'column'} color={Color.MAIN} />
    <nav>
      <Menu menuItems={['home', 'about', 'contact']} color={Color.MAIN} />
    </nav>
  </>
)

export const RightContent: FC = () => (
  <>
    <div style={{ height: '250px', backgroundColor: Color.GREEN, margin: '0 2rem 2rem', padding: '1rem' }}>
      <h1>Hero</h1>
    </div>
    <div
      style={{
        height: 'calc(100vh - (250px + 2rem + 10px))',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 1rem 1rem',
      }}
    >
      <div style={{ backgroundColor: Color.BLUE, height: '100%', margin: '1rem', padding: '1rem', flex: '1 1 70%' }}>
        <h1>Left Body</h1>
      </div>
      <div style={{ backgroundColor: Color.BLUE, height: '100%', margin: '1rem', padding: '1rem', flex: '1 1 30%' }}>
        <h1>Right Body</h1>
      </div>
    </div>
  </>
)
