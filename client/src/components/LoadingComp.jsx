import React from 'react'
import ReactLoading from 'react-loading'

const LoadingComp = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        <ReactLoading type={'spin'} color={'white'} height={'10%'} width={'10%'} />
    </div>
  )
}

export default LoadingComp