import React from 'react'
import { UserState } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const {userDetails} = UserState();
    const nav = useNavigate();
  return (
    <div className='flex items-center h-screen justify-center'>
       <div className='flex flex-col'>
        <h1 className='text-white text-3xl md:text-5xl'>Who is Watching ?</h1>
        <div className='flex items-center justify-center gap-8 mt-10'>
            <div onClick={()=>nav('/home')}>
                <div className='group flex-row w-44 mx-auto'>
                   <div className='
                        w-44
                        h-44
                        rounded-md
                        flex
                        items-center
                        justify-center
                        border-2
                        border-transparent
                        group-hover:cursor-pointer
                        group-hover:border-white
                        overflow:hidden 
                   '>
                    <img src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg" alt=""  className='rounded-md'/>
                    </div> 
                    <div className='
                        mt-4
                        text-2xl
                        text-gray-400
                        text-center
                        group-hover:text-white
                        group-hover:cursor-pointer
                    '
                    >{userDetails?.name}</div>
                </div>
            </div>
        </div>
        </div> 
    </div>
  )
}

export default Welcome