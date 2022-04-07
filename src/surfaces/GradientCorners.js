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
  
  const [blue, setBlue] = useState(0.5);

  return (
    <Surface 
      width={width} 
      height={height} 
      onMouseOver={() => setBlue(1.0)}
      onMouseOut={() => setBlue(0.0)}
    >
      <Node shader={shader.gradientCorners} uniforms={{blue: blue}} />
    </Surface>
  )

}

export default GradientCorners