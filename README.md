## Issues

+ Babel raw.macro is used to read .frag files as a string. This is because !!raw-loader! does not appear to be working within CRA. Unfortunately this means changes in the .frag files are invisible to Webpack's watcher and do not trigger a live reload.

+ Something in `gl-react` does not work with React18's `createRoot`. Needs investigation.

+ Currently local attrib changes cause the whole App to rerender. Need to restructure or use better state management. I tried Redux, it overcomplicated the very simple state needed but did not solve the problem :(

## TODO

+ Implement HUD controls for GLSL uniforms input

