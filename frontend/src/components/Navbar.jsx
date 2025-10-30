import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { BsSearch, BsFillPersonFill  } from "react-icons/bs";
import {NavLink} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
  const [mobile,setmobile]=useState(false);
  function mobileview(){
    setmobile(!mobile)
  }

  return (
    <div className='relative'>
        <div className='md:flex hidden fixed z-15 top-0 p-3 bg-[#000000] w-full items-center justify-between'>
            <img src={logo} alt="flixplore" className='w-20' />
              <div className='flex text-2xl justify-between items-center w-[30%]'>
                  <NavLink className={({ isActive }) => isActive ? 'nav-hover active-link' : 'nav-hover' } to="/">Home</NavLink>
                  <NavLink className={({ isActive }) => isActive ? 'nav-hover active-link' : 'nav-hover' }  to="/movies">Movies</NavLink>
                  <NavLink className={({ isActive }) => isActive ? 'nav-hover active-link' : 'nav-hover' }  to="/series">Series</NavLink>
                  <NavLink className={({ isActive }) => isActive ? 'nav-hover active-link' : 'nav-hover' }  to="/wishlist">MyList</NavLink>
              </div>
            <div className='flex text-2xl justify-around items-center w-[10%]'>
                <div className='hover:scale-110'><BsSearch/></div>
                <div className='hover:scale-110'><BsFillPersonFill/></div>
            </div>
        </div>

<div className='relative'>
    <div className='md:hidden w-full bg-[#000000] fixed z-20 flex justify-between items-center'>
      <div>
        <img src={logo} alt="flixplore" className='w-10'/>
      </div>
      <div>
          <button onClick={mobileview}><GiHamburgerMenu/></button>
{mobile&&
    <div className='absolute  z-20 text-lg flex flex-col justify-center items-end w-[25%] bg-[#222121ff] text-[#f60808ff] right-0 gap-10 rounded px-1 py-4'>
      <NavLink className={({ isActive }) => isActive ? 'nav-hover-mob active-link-mob' : 'nav-hover' } to="/">Home</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'nav-hover active-link' : 'nav-hover' }  to="/movies">Movies</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'nav-hover active-link' : 'nav-hover' }  to="/series">Series</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'nav-hover active-link' : 'nav-hover' }  to="/wishlist">MyList</NavLink>
    </div>
}

      </div>
    </div>
    </div>
    </div>

      
  )
}

export default Navbar

// #222121ff