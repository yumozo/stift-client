import React from 'react'

const Masthead = () => {
  return (
    <div
     className='min-h-screen flex flex-col items-center justify-center'
    >
      <div
        className='p-12 font-bold z-10 text-black text-center
        flex flex-col items-center justify-center'
      >
        <h1 className='mb-6 text-4xl xl:text-5xl'>Recorder</h1>
        <h2 className='mv-2 text-2xl xl:text-2xl tracking-tight'>
          <span>Self Development,</span> <span>done right.</span>
          
        </h2>
      </div>
    </div>
  )
}

export default Masthead