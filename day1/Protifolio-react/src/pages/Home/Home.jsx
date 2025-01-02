import React from 'react'
import { FiDownload } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from "react-icons/fi";
import ProfileImage from '../../assets/Profile.png';
const Home = (props) => {
  return (
   <div className='flex items-center gap-x-3'>
      <div className='flex  justify-center items-start w-full h-[calc(100vh-8ch)] px-28 flex-col gap-y-4  '>
        {/* Content Section */}
        <div className="flex items-center gap-4">
            <span className="text-5xl text-red-950 font-bold">Hi, I'm</span>{""}
            <span className="text-5xl text-red-700">{props.username}</span>
        </div>
        {/* Secondary Content */}
        <div className='text-neutral-900 text-3xl font-semibold tracking-wide'>
          A FULL STACK DEVELOPER
        </div>
        {/* Main Content */}
        <h5>Passionate about creating innovative web solutions and turning ideas into reality.With<br></br>
                expertise in both front-end and back-end technologies,I bring a holistic approach to<br></br>
                every project.
        </h5>
        {/* Two Buttons */}
        <div className="flex gap-x-2">
          {/* Download Cv Button */}
          <button className='bg-neutral-900 px-5 py-2 text-white flex rounded-full'>
            
            <Link to="" className='flex gap-x-1'>
              Download CV 
              <span className='flex items-center'>
                <FiDownload/>
              </span>
            </Link> 
            
            </button>
            {/* Hire Me Button */}
            <button className='bg-red-600 px-5 py-2 text-white flex rounded-full'>
            
            <Link to="" className='flex gap-x-1'>
              Hire Me
              <span className='flex items-center'>
                <FiArrowUpRight className='text-white'/>
              </span>
            </Link> 
            
            </button>
        </div>
      </div>
      {/* photo Container */}
      <div>
        <img src={ProfileImage} className='width-auto h-4/6'></img>
      </div>
    </div>

  )
}

export default Home