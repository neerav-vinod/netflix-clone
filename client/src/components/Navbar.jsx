import React, { useEffect, useState } from 'react'
import NavbarItem from './NavbarItem'
import { FaChevronDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import MobileMenu from './MobileMenu';
import AccountMenu from './AccountMenu';

const Navbar = () => {
    const [visibleMObileMenu, setVisibleMObileMenu]= useState(false)
    const [visibleAccountMenu, setVisibleAccountMenu] = useState(false)
    const [showBackground,setShowBackground] = useState(false)

    const toggleMobileMenu =() =>{
        setVisibleMObileMenu(!visibleMObileMenu);
    }

    const toggleAccountMenu = () =>{
        setVisibleAccountMenu(!visibleAccountMenu)
    }

    const TOP_OFFSET = 66;

    useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY >= TOP_OFFSET){
        setShowBackground(true)
      } else{
        setShowBackground(false);
      }
    }
      window.addEventListener('scroll',handleScroll);

      return () =>{
        window.removeEventListener('scroll',handleScroll)
      }
    },[])
  return (
    <nav className='w-full fixed z-40'>
       <div className={`
        px-4
        md:px-16
        flex
        flex-row
        items-center
        transistion
        duration-500
       ${showBackground ? 'bg-zinc-900 bg-opacity-90':'' }
       `}>
        <img className='h-14 lg:h-20' src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456" alt="" />
        <div className='
            flex-row
            ml-8
            gap-7
            hidden
            lg:flex
        '>
            <NavbarItem label='Home'/>
            <NavbarItem label='Series'/>
            <NavbarItem label='Films'/>
            <NavbarItem label='New & Popular'/>
            <NavbarItem label='My LIst'/>
            <NavbarItem label='Browse By languages'/>
        </div>
        <div onClick={toggleMobileMenu} className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'>
            <p className='text-white text-sm'>Browse</p>
            <FaChevronDown className={`text-white transition mt-1 ${visibleMObileMenu ? " rotate-180" : 'rotate-0'}`} />
            <MobileMenu visible={visibleMObileMenu}/>
        </div>
        <div className='flex flex-row ml-auto gap-7 items-center'>
            <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
              <FaSearch/>
            </div>
            <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
              <FaBell/>
            </div>
            <div onClick={toggleAccountMenu} className='flex flex-row items-center gap-2 cursor-pointer relative'>
                <div className='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden'>
                  <img src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg" alt="" />  
                </div>
               <FaChevronDown className={`text-white transition mt-1 ${ visibleAccountMenu === true ? 'rotate-180' : 'rotate-0'}`} />
                <AccountMenu visible={visibleAccountMenu} />
            </div>
        </div>
        </div> 
    </nav>
  )
}

export default Navbar