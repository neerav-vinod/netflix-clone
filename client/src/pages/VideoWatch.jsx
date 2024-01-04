import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate, useParams } from 'react-router-dom';
import useplayVideo from '../hook/usePlayVideo';

const VideoWatch = () => {
    const nav = useNavigate()
    const {id} = useParams();
    const url = `/watch/${id}`
    const {videoData} = useplayVideo(url);
    console.log(url);
    console.log(videoData);
  return (
    <div className='h-screen w-screen bg-black'>
        <nav
            className='
            fixed
            w-full
            p-4
            z-10
            flex
            flex-row
            items-center
            gap-8
            bg-block
            bg-opacity
            '>
                <IoMdArrowBack onClick={()=>nav('/home')} className='text-white size-10 cursor-pointer'/>
                <p className='text-white text-1xl md:text-3xl font-bold'>
                    <span className='font-light'>
                        Watching:
                    </span>
                    {videoData.title}
                </p>
        </nav>
        <video
            autoPlay
            controls
            className='
            h-full
            w-full
            '
         src={videoData.videoUrl}
         ></video>
    </div>
  )
}

export default VideoWatch