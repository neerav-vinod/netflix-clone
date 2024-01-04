import React, { useEffect, useState } from 'react'
import instance from '../services/Instance'
import { IoIosInformationCircleOutline } from "react-icons/io";
import PlayButton from './PlayButton';
import { UserState } from '../context/UserContext';
import LoadingComp from './LoadingComp';


const Billboard = ({setVisible,visible}) => {
    const [movieForBillboard,setMovieForBillboard] = useState('');
    const {setModalData} = UserState();
    const randomMovie = async() =>{
        try {
         const response = await instance.get('/videos')
         const number = Math.floor(Math.random()* response.data.length)+1  
         const randMovie = response?.data[number]
         setMovieForBillboard(randMovie)
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        randomMovie();
    },[])

    const handleOpen = () =>{
        setVisible(!visible)
        setModalData(movieForBillboard)
    }
    
  return (
    <>
    {!movieForBillboard ? <LoadingComp/> :
     <div className='relative h-[50vw]'>
        <video
        className='
        w-full
        h-[50.26vw]
        object-cover
        brightness-[60%]
        '
        autoPlay
        muted
        loop 
         poster={movieForBillboard?.thumbnailUrl} 
         src={movieForBillboard?.videoUrl}>
         </video>
         <div className='absolute top-[40%] md:top-[40%] ml-4 md:ml-16'>
            <h1 className='text-white text-2xl md:text-5xl h-full w-[70%] lg:text-6xl font-bold drop-shadow-xl'>
                {movieForBillboard.title}
            </h1>
            <p className='text-white
                            text-[8px]
                            md:text-lg
                            mt-3
                            md:mt-8
                            w-[90%]
                            md:w-[50%]
                            lg:w-[50%]
                            drop-shadow-xl
            '>
                {movieForBillboard.description}
            </p>
            <div className='flex flex-row items-center mt-3 md:mt-4 gap-4'>
            <PlayButton  movie={movieForBillboard}/>
                <button onClick={()=>handleOpen()} className='
                        bg-white
                        text-white
                        bg-opacity-30
                        rounded-md
                        py-1 md:py-2
                        px-2 md:px-4
                        w-auto
                        text-xs lg:text-lg
                        font-semibold
                        flex
                        flex-row
                        items-center
                        hover:bg-opacity-20
                        transition
                '>
                   More Info <IoIosInformationCircleOutline className='ml-1 mt-' />
                </button>
            </div>
         </div> 
    </div>}
    </>
  )
}

export default Billboard