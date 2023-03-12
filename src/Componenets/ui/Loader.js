import React from 'react'
import {  RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <div className='flex h-[60vh] self-center m-auto'>
   

   <RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
    </div>
  )
}

export default Loader
