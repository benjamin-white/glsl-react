import { useState }            from 'react'
import { Surface }             from 'gl-react-dom'
import { Shaders, GLSL, Node } from 'gl-react'
import raw                     from 'raw.macro'

const shader = Shaders.create({
  gradientCorners: {
    frag: GLSL`${raw('./gradient-corners.frag')}`
  }
})

const GradientCorners = ({ width, height }) => {
  
  const [channels, setChannels] = useState({
    green: 0.0,
    blue: .5,
  })

  return (
    <Surface 
      width={width} 
      height={height} 
      onMouseMove={(ev) => {
        setChannels({
          green: ev.clientY / height,
          blue: ev.clientX / width
        })
      }}
    >
      <Node shader={shader.gradientCorners} uniforms={{green: channels.green, blue: channels.blue}} />
    </Surface>
  )

}

export default GradientCorners