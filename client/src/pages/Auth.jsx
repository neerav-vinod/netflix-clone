import React, { useState } from 'react'
import Input from '../components/Input'
import instance from '../services/Instance';
import { UserState } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Auth = () => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const [status, setStatus] = useState(true)

  const toggler = () =>{
    setStatus(!status)
  }

  const {userDetails} = UserState();

  console.log(userDetails);


  const loginHandler = async() =>{

    const body = {
      email:email,
      password:password
    }

    try {
     const response = await instance.post('/user/login',body)
     console.log(response);
     localStorage.setItem('token',JSON.stringify(response.data.token))
     localStorage.setItem('userDetails',JSON.stringify(response.data.existEmail))
      nav('/welcome')
    } catch (error) {
      
    }
  }

  const registerHandler = async() =>{
    const body ={
      email:email,
      password:password,
      name:name,
    }

    try{
      const response = await instance.post('/user/signup',body)
      console.log(response);
    }catch(err){

    }
  }

  const backgroundImageUrl = `https://mapandfire.com/wp-content/uploads/2021/09/netflix-brand-hero-image.jpg`
  return (
    <div style={{backgroundImage:`url(${backgroundImageUrl})`, objectFit:"cover" , objectPosition:"center", backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className='relative h-screen w-full'>
     <div className='bg-black w-full h-screen lg:bg-opacity-70'>
      <nav>
        <img src='https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456' alt="" className='h-[8rem]' /> 
      </nav>
      <div className='flex justify-center'>
        <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
          <h2 className='text-white text-4xl mb-8 font-semibold'>
           {status===true ? "Sign in" : "Sign up" }
          </h2>

          <div className='flex flex-col gap-4'>
          { status === false && (  <Input 
           label='Username'
           onChange={(e)=>setName(e.target.value)}
           id='username'
           type='text'
           value={name}
           />)}
           <Input 
           label='Email'
           onChange={(e)=>setEmail(e.target.value)}
           id='email'
           type='text'
           value={email}
           />

          <Input 
           label='Password'
           onChange={(e)=>setPassword(e.target.value)}
           id='password'
           type='password'
           value={password}
           />
            <button onClick={ status==true ? loginHandler : registerHandler } className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
            {status ? 'Login':"Sign up"}
           </button>
           </div>
          <p className='text-neutral-500 mt-12'>
            {status===true ? "First Time using Netflix?" : "Already have an account? "}
            <span onClick={toggler} className=' text-white ml-1 hover:underline cursor-pointer'>
              {status===true ? "Create an account" : "Login" }
            </span>
          </p>
        </div>

      </div>
      </div> 
    </div>
  )
}

export default Auth