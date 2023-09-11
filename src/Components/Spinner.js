import React from 'react'
import "./Spinner.css"
const Spinner = () => {
  return (
    <div className="flex flex-col items-center space-y-6 gap-2">
    <div className='spinner'></div>
    <p className='text-white text-xl font-bold mt-2'>Loading....</p>
      
    </div>
  )
}

export default Spinner
