import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Error from './pages/error'


const App = () =>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/error' element={ <Error/> }/>
    </Routes>
  </BrowserRouter>


export default App