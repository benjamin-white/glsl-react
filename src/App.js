import HeaderSite      from './components/HeaderSite'
import config          from './config'
import GradientCorners from './surfaces/GradientCorners'
import ContourLines    from './surfaces/ContourLines'

import { connect } from 'react-redux'

const App = (props) => {

  const surfaces = {
    GradientCorners,
    ContourLines
  }

  const CurrentSurface = surfaces[props.currentName]

  return (
    <main data-date={(new Date().getTime())}>
      <HeaderSite items={Object.keys(surfaces)} />
      <CurrentSurface width={config.width} height={config.height} />
    </main>
  )

}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(App)