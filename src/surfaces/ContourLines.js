import { useState }            from 'react'
import { Surface }             from 'gl-react-dom'
import { Shaders, GLSL, Node } from 'gl-react'
import raw                     from 'raw.macro'

const shader = Shaders.create({
  contourLines: {
    frag: GLSL`${raw('./contour-lines.frag')}`
  }
})

const ContourLines = ({ width, height }) => {

  const [mult, setMult] = useState(1)

  const uniforms = {
    u_resolution: [width / mult, height / mult],
    u_mouse: [100, 100],
    u_time: 1.0,
  }

  return (
    <Surface 
      width={width} 
      height={height} 
      onMouseOver={() => setMult(2)}
      onMouseOut={() => setMult(1)}
    >
      <Node shader={shader.contourLines} uniforms={uniforms} />
    </Surface>
  )

}

export default ContourLines