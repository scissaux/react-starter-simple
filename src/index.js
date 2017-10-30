import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './components/App'

const render = (Component) => {
  const app = (
    <AppContainer>
      <Component />
    </AppContainer>
  )
  ReactDOM.render(app, window.document.getElementById('app'))
}

if (process.env.NODE_ENV === 'development' && module && module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  })
}

render(App)
