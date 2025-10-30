import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Wishlist from './pages/Wishlist'
import Profile from './pages/Profile'
import Movies from './pages/Movies'
import Series from './pages/Series'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/explore' Component={Explore}/>
        <Route path='/wishlist' Component={Wishlist}/>
        <Route path='/profile' Component={Profile}/>
        <Route path='/movies' Component={Movies}/>
        <Route path='/series' Component={Series}/>
      </Routes>
    </div>
  )
}

export default App