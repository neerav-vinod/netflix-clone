import React from 'react'
import { FaPlay } from "react-icons/fa";
import Fvaouritebtn from './Fvaouritebtn';
import { useNavigate } from 'react-router-dom';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { UserState } from '../context/UserContext';

const MovieCard = ({movie,visible,setVisible}) => {
    const nav = useNavigate();
    const {setModalData} = UserState();

    const handleOpen = () =>{
        setVisible(!visible)
        setModalData(movie)
    }
  return (
        <div className='group bg-zinc-900 col-span relative h-[12vw]'>
            <img
                className='
                cursor-pointer
                object-cover
                transition
                duration
                shadow-xl
                rounded-md
                group-hover:opacity-90
                sm:group-hover:opacity-0
                delay-300
                w-full
                h-[12vw]
                '
             src={movie.thumbnailUrl} alt="" />
             <div className='
                  opacity-0
                  absolute
                  top-0
                  transition
                  duration-200
                  z-10
                  invisible
                  sm:visible
                  delay-300
                  w-full
                  scale-0
                  group-hover:scale-110
                  group-hover:-translate-y-[6vw]
                  group-hover:translate-x-[2vw]
                  group-hover:opacity-100
             '>
                <img 
                    className='
                    cursor-pointer
                    object-cover
                    transition
                    duration
                    shadow-xl
                    rounded-t-md
                    w-full
                    h-[12vw]
                    '
                src={movie.thumbnailUrl} alt="" />
                <div className='
                         z-10
                         bg-zinc-800
                         p-2
                         lg:p-4
                         absolute
                         w-full
                         transition
                         shadow-md
                         rounded-b-md
                '>
                    <div  className='flex flex-row items-center gap-3 justify-between'>
                        <div className='flex gap-2'>
                        <div className='cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300' onClick={()=> nav(`/watch/${movie._id}`)} >
                            <FaPlay size={10}  />
                        </div>
                        <Fvaouritebtn movie={movie} />
                    </div>
                    <div>
                    <IoIosInformationCircleOutline size={30} className='text-white' onClick={()=>handleOpen()}  />
                    </div>
                    </div>
                    <p className='text-green-400 font-semibold mt-4'>
                        New <span className='text-white'>2023</span>
                    </p>

                    <div className='flex flex-row mt-4 gap-2 items-center'>
                        <h1 className='text-white text-[10px] lg:text-sm'>{movie.duration}</h1>
                    </div>

                    <div className='flex flex-row mt-4 gap-2 items-center'>
                        <h1 className='text-white text-[10px] lg:text-sm'>{movie.genre}</h1>
                    </div>

                </div>
             </div>
        </div>
   
  )
}

export default MovieCard