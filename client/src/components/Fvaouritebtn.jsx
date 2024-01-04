import React from 'react'
import { FaPlus } from "react-icons/fa";
import { UserState } from '../context/UserContext';
import instance from '../services/Instance';



const Fvaouritebtn = ({movie}) => {

  const {userDetails} = UserState();
  
  const favMovieHandler= async(movie) => {
    const body={
      movieId:movie._id,
      userId:userDetails._id
    }

    try {
      const response = await instance.post('/user/handlefav',body)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div onClick={()=>favMovieHandler(movie)} className='
        cursor-pointer
        group/item
        w-6
        h-6
        lg:w-10
        lg:h-10
        border-white
        border-2
        rounded-full
        flex
        justify-center
        items-center
        transition
        hover:border-neutral-300
    '>
       <FaPlus className='text-white'  />
    </div>
  )
}

export default Fvaouritebtn