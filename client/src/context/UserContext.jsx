import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const UserContext = createContext()

const UserProvider = ({children})=>{

    const[userDetails,setUserDetails] = useState('');
    const[favData,setFavData] = useState('');
    const[modalData,setModalData]= useState('')
    const nav = useNavigate();

    const userInfo = JSON.parse(localStorage.getItem('userDetails'));

    useEffect(()=>{
        if(!userInfo){
            
            nav('/')
        }
        else{
            setUserDetails(userInfo)
        }

    },[])

    return(
        <UserContext.Provider value={{userDetails,favData,setFavData,modalData,setModalData}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserState = () =>{
    return useContext(UserContext)
}

export default UserProvider