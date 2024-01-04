import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movieList,visible,setVisible}) => {

  
    
  return (
    <>
   {!movieList ? "" : <div className='px-4 md:px-12 mt-4 space-y-8'>
        <p className='text-white text-md md:text-xl lg:text-2xl font-semibold'>
            {title}
        </p>
        <div className='grid grid-cols-4 gap-2'>
            {movieList?.map((data)=>(
               <MovieCard key={movieList?._id} 
               movie={data}
               setVisible={setVisible} 
               visible={visible}
               />
            ))}
        </div>
    </div>}
    </>
  )
}

export default MovieList