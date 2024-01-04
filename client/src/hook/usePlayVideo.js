import React, { useEffect, useState } from 'react'
import instance from '../services/Instance';

const usePlayVideo = (url) => {
    const [videoData,setVideoData] = useState('');
    const [error,setError] = useState('');

    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const response = await instance.post(url);
                setVideoData(response.data);
            } catch (error) {
                setError(error);
            }
        }
        fetchData();
    },[url])

  return {videoData,error}
}

export default usePlayVideo