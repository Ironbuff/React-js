import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import Profile from '../../assets/Kushal.png';
function About() {
  return (
    <div className='px-28 flex items-center h-[calc(100vh-8ch)] w-full justify-between'>
      <div className='flex flex-col space-y-12 items-start'>
        {/* Hero Section content box */}
        <div className="space-y-5">
          <div className="space-y-6">
            <h1 className='text-6xl font-bold text-red-600 tracking-wide'>
              <span className="text-red-950 pr-2.5">
                Hi, I'm
              </span>
              Kushal Bhandari
            </h1>
            {/* Secondary Content */}
            <h4 className='text-3xl tracking-wide font-semibold'>
              A FULL STACK DEVELOPER
            </h4>
          </div>
          {/* Main Content container */}
          <p className='font-normal'>
            Passionate about creating innovative web solutions and turning ideas into reality.With<br></br>
            expertise in both front-end and back-end technologies,I bring a holistic approach to<br></br>
            every project.
          </p>
        </div>
        {/* Button Container */}
        <div className='flex gap-x-3 gap-y-7'>
          {/* Download button */}
          <button className='bg-neutral-900 text-white flex rounded-3xl hover:bg-neutral-800'>
            <label for="/" className='text-xl px-8 py-3 flex '>
              Download Cv
              <span className='text-white flex items-center pl-2'>
                <MdOutlineFileDownload />
              </span>
            </label>
          </button>
          {/* Hire Me Button */}
          <button className='bg-red-600 text-white flex rounded-3xl hover:bg-red-500 hover:text-black group ease-in-out duration-300'>
            <label for="/" className='text-xl px-8 py-3 flex '>
              Hire Me
              <span className='text-white flex items-center pl-2'>
                <FiArrowUpRight className='group-hover:rotate-45 ease-in-out duration-300' />
              </span>
            </label>
          </button>
        </div>
      </div>
      <div className=''>
        {/* scale has value from 110 to 150 */}
        <img src={Profile} className='w-full aspect-square'/>
      </div>
    </div>
  )
}
export default About