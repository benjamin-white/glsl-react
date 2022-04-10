precision highp float;
varying vec2 uv;
uniform float blue;
uniform float green;
void main() {
  gl_FragColor = vec4(uv.x, green, blue, 1.0);
}