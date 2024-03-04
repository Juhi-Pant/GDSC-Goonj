import React from 'react'
import logo from '../assests/Images/Untitled design 1.png'
import Frame from '../assests/Images/Frame 2.png'
import Navbar from '../MainWebsite/Components/Navbar'

function Homepage() {

  const backgroundStyle = {
    backgroundImage: `url('/extracted avengers 1.png')`,
    backgroundSize: '800px 100vh',
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat',
    };


  return (
    <>
    <div className='h-screen w-full' style={{...backgroundStyle, backgroundColor: 'black'}}>
      <div className='flex gap-x-24'>
      <div><img src={logo} alt="" className='h-40 ml-2'/></div>
      <div><Navbar/></div>
      </div>
    
    <div className='flex justify-center items-center'>
       <img src={Frame} alt="" />
    </div>


      </div>
    </>
  )
}

export default Homepage