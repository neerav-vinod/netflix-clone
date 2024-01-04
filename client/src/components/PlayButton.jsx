import React from 'react'
import { FaPlay } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const PlayButton = ({movie}) => {  
  const nav = useNavigate();

 

  return (
    <div onClick={()=>nav(`/watch/${movie._id}`)} className='
       bg-white
       rounded-md
       py-1 md:py-2
       px-2 md:px-4
       w-auto
       text-xs lg:text-lg
       font-bold
       flex
       flex-row
       items-center
       hover:bg-neutral-300
       cursor:pointer
       transition 
    '>
        <FaPlay size={10} className='mr-1'/>
        Play
    </div>
  )
}

export default PlayButton