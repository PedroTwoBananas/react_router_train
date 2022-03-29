import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import App from './components/App'

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
`

render(
   <React.StrictMode>
      <BrowserRouter>
         <Global />
         <App />
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById('root')
)
