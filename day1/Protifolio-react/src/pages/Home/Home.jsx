import React from 'react'
import { FiDownload } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from "react-icons/fi";
import ProfileImage from '../../assets/Profileimg.png';
const Home = (props) => {
  return (
   <div className='w-fulll flex items-center gap-x-3 px-28'>
      <div className='flex justify-center items-start w-full h-[calc(100vh-8ch)] flex-col space-y-12'>
       <div className="space-y-6">
       <div className="space-y-4">
          {/* Content Section */}
        <h1 className="text-6xl font-bold text-red-600 flex items-center gap-4">
            <span className="text-red-950 font-black">Hi, I'm</span>  Kushal Bhandari
            {/* <span className="text-5xl text-red-700">{props.username}</span> */}
        </h1>
        {/* Secondary Content */}
        <h4 className='text-neutral-900 text-3xl font-semibold tracking-wide'>
          A FULL STACK DEVELOPER
        </h4>
        </div>
        {/* Main Content */}
        <p>Passionate about creating innovative web solutions and turning ideas into reality.With<br></br>
                expertise in both front-end and back-end technologies,I bring a holistic approach to<br></br>
                every project.
        </p>
       </div>
        {/* Two Buttons */}
        <div className="flex items-center gap-x-4">
          {/* Download Cv Button */}
          <button className='bg-neutral-900 text-white flex rounded-full'>
            
            <Link to="" className='flex gap-x-1 px-8 py-3'>
              Download CV 
              <span className='flex items-center'>
                <FiDownload/>
              </span>
            </Link> 
            
            </button>
            {/* Hire Me Button */}
            <button className='bg-red-600 text-white flex rounded-full'>
            
            <Link to="" className='flex gap-x-1  px-8 py-3'>
              Hire Me
              <span className='flex items-center'>
                <FiArrowUpRight className='text-white'/>
              </span>
            </Link> 
            
            </button>
        </div>
      </div>
      {/* photo Container */}
      <div className=''>
        <img src={ProfileImage} className='w-full aspect-square object-cover scale-125' />
      </div>
    </div>

  )
}

export default Home