import React, { useEffect, useState } from 'react'
import instance from '../services/Instance'
import { UserState } from '../context/UserContext'

const useFav = (favurl,id) => {
    // const [favData, setFavData] = useState('')
    const {setFavData,favData} = UserState();
    const [loading,setLoading] = useState(false)
    const [error , setError] = useState('')

    useEffect(()=>{
        const fetchData = async() =>{
            const body={
                userId:id
            }
            try{
            const response = await instance.post(favurl,body)
            setFavData(response.data.favourites)
            }
            catch(e){
                setError(e)
            }
            finally{
                setLoading(false)
            }
        }
        
        fetchData()
    },[favurl, id, setFavData,favData])
     
}

export default useFav