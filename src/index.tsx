import ReactDOM from 'react-dom'

import App from './App'

import { Container, Contents } from './index.styles'
import { GlobalStyle } from './styles/globals'


ReactDOM.render(
  <Container>
    <Contents>
      <App/>
    </Contents>

    <GlobalStyle/>
  </Container>,
  document.getElementById('root')
)
