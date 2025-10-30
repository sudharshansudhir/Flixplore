// import React, { useState } from 'react'
// import {allmovies} from "../assets/data.json"
// import { Coins } from 'lucide-react'
import Allmovies from '../components/Allmovies'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Welcome from '../components/Welcome'
const Movies = () => {
  // const [Movies,setMovies]=useState(allmovies)
  // const filteredmovies=Movies.filter((item)=>(!item.episodes_count))

  return (
    <div>
      <Navbar/>
      <Welcome/>
      <Allmovies/>
      <Footer/>

    </div>
  )
}

export default Movies