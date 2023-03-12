import React from 'react'
import {  RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <div className='h-[40vh] flex '>
   
        <div className='self-center'>
        <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
        />
        </div>
  
    </div>
  )
}

export default Loader
