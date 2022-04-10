import { useState, useEffect} from 'react'
import HeaderSite from './components/HeaderSite'
import GradientCorners from './surfaces/GradientCorners'
import ContourLines from './surfaces/ContourLines'
import { debounce, getViewDimensions } from './utils'
import style from './App.module.css'

const App = () => {

  const surfaces = {
    GradientCorners,
    ContourLines
  }

  const [size, setSize] = useState(getViewDimensions())
  const [currentName, setCurrentName] = useState('GradientCorners')
  const CurrentSurface = surfaces[currentName]
  const onResize = debounce(() => {setSize(getViewDimensions())})

  useEffect(() => {
    window.addEventListener('resize', onResize)
  }, [])

  return (
    <main>
      <HeaderSite 
        items={Object.keys(surfaces)} 
        updateSurface={setCurrentName} 
      />
      <section className={style.surfaceWrap}>
        <CurrentSurface width={size.width} height={size.height} />
      </section>
    </main>
  )

}

export default App