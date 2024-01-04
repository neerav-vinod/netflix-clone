import { useEffect, useState } from "react"
import instance from "../services/Instance";


const useVideo = (url) => {
    const [data,setData] = useState('');
    const[loading,setLoading] = useState(true);
    const [error,setError] = useState('');

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const response = await instance.get(url);
                setData(response.data)
            }
            catch(err){
                setError(err)
            }
            finally{
                setLoading(false)
            }
        }

        fetchData();
    },[url])
  return {data,loading,error}
}

export default useVideo