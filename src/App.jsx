import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import Upcoming from './pages/Upcoming'
import Trending from './pages/Trending'
import Genres from './pages/Genres'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/upcoming' element={<Upcoming/>}></Route>
            <Route path='/trending' element={<Trending/>}></Route>
            <Route path='/genres' element={<Genres/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
