import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const reducer = (state, action) => {
  switch (action.type) {
    case 'SWITCH_SURFACE':
      return {
        ...state,
        currentName: action.payload
      }
    default:
      return state
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={createStore(reducer, {
//       currentName: 'GradientCorners'
//     })}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
