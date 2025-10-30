import React, { useRef, useState } from 'react'
import {action} from "../assets/data.json"
import { ChevronRight,ChevronLeft } from "lucide-react";

const Action = () => {
  const [Movies,setMovies]=useState(action)
  // const Action=Movies.filter((item)=>(item.genre[0]=="Romance"))
  const scrollRef=useRef(null)
  // console.log(Movies)
    const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };
    const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  return (
    <div className='relative my-8 mx-4'>
      <div className='text-2xl my-4'>Action Picks</div>
      <div style={{
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  }} ref={scrollRef} className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth">
    <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur-md"
      >
        <ChevronLeft size={28} />
      </button>
      {Movies && 
        Movies.map((item,index)=>{
          return  <img key={index} src={item.thumbnail} alt={item.name} width={200} />
        })
      }
        <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 backdrop-blur-md"
      >
        <ChevronRight size={28} />
      </button>
      </div>
    </div>
  )
}

export default Action