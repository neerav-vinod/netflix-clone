import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UserState } from '../context/UserContext';

const AccountMenu = ({visible}) => {

    const nav = useNavigate();
    const {userDetails} = UserState();

if (!visible){
  return null;
  }

  const signOutHandler = () =>{
    localStorage.clear();
    nav('/')
  }
  return(
    <div className='bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-grey-800'>
        <div className='flex flex-col gap-3'>
            <div className='px-3 group/item flex flex-row gap-3 items-center w-full'> 
                <img className='w-8 rounded-md' src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg" alt="" />
                <p className='text-white text-sm group-hover/item:underline'>
                    {userDetails.name}
                </p>
            </div>
            <hr className='bg-gray-600 border-0 h-px my-4'/>
            <div onClick={()=>signOutHandler()} className='px-3 text-center text-white text-sm hover:underline cursor-pointer'>
                Sign out of Netflix
            </div>
        </div>
    </div>
  )
  
}

export default AccountMenu