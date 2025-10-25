import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import Shops from './pages/Shops'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import Location from './pages/Location'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/menu' Component={Menu}></Route>
        <Route path='/shops' Component={Shops}></Route>
        <Route path='/cart' Component={Cart}></Route>
        <Route path='/location' Component={Location}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/register' Component={Register}></Route>
        <Route path='/profile' Component={Profile}></Route>
        <Route path='/about' Component={About}></Route>
        <Route path='/contact' Component={Contact}></Route>
      </Routes>
    </>
  )
}

export default App
