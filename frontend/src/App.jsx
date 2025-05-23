import React, { useState } from 'react'
import "./App.css"

const App = () => 
  {

    const [screen, setScreen] = useState(1);

  return (
    <>
    {
      screen === 1 ?
      <>
        <div className="container flex flex-col items-center justify-center h-screen">
          <h1 className='text-[30px] font-[700]'>AI-Powered <span className='text bg-green-700'>Blog Generator</span></h1>
          <textarea className='w-[50vw] min-h-[50vh] mt-5 p-[30px] bg-transparent border-[2px] border-[#929292ad] focus:border-green-900 outline-none rounded-xl' placeholder='Enter your Prompt...' ></textarea>


        </div>
      </> 
      : 
      <>Screen 2</>
    }
    </>
  )
}

export default App
