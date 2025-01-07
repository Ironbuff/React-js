import { MdOutlineFileDownload } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import Profile from '../../assets/Kushal.png';
import { FaFacebookF } from 'react-icons/fa6';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
const About = () => {

  //setting up quote state 
 

  function randomNumberInRange(min, max) {
    //  get number between min and max
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const socialLinks = [
    { id: 1, icon: <FaFacebookF />, link: "/" },
    { id: 2, icon: <FaInstagram />, link: "/" },
    { id: 3, icon: <FaTwitter />, link: "/" },
  ]
  // defining getQuote Button
  return (
    <>
      {/* flex nowrap adjust content on same line in wrap it adjust the content on different line */}
      <div className='md:px-28 px-6 flex items-center md:h-[calc(100vh-8ch)] h-auto w-full justify-between  flex-wrap md:flex-row flex-row-reverse'>
        <div className='md:w-[50%] w-full flex flex-col space-y-12 items-start py-6'>
          {/* Hero Section content box */}
          <div className="space-y-5">
            <div className="space-y-6">
              <h1 className='md:text-6xl text-4xl font-bold text-red-600 tracking-wide'>
                <span className="text-red-950 pr-2.5">
                  Hi, I'm
                </span>
                Kushal Bhandari
              </h1>
              {/* Secondary Content */}
              <h4 className='md:text-3xl text-2xl tracking-wide font-semibold'>
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
          <div className='md:flex gap-x-2 hidden'>
            {socialLinks.map((item) => (
              <Link to={item.link} className='list-none border border-neutral-800 hover:border-red-600 rounded-full flex items-center justify-center shadow-lg bg-neutral-800 hover:bg-red-600 w-10 h-10 text-white ease-in-out duration-300'>
                {item.icon}
              </Link>
            ))}
          </div>
          {/* Button Container */}
          <div className='flex gap-x-3 gap-y-7 w-full items-center '>
            {/* Download button */}
            <Link to="/" className='md:w-fit w-1/2 flex items-center justify-center gap-x-2 md:px-8 px-6 py-3 bg-neutral-900 text-white rounded-full'>
              Download Cv
              <span className='text-white md:flex items-center pl-2'>
                <MdOutlineFileDownload />
              </span>
            </Link>
            {/* Hire Me Button */}
            {/* fit content adjust the size according to the content to be clear watch https://youtube.com/shorts/4iwQcvHYfWE?si=6mCICrlroplGBQcV */}
            <Link to="/" className='md:w-fit w-1/2 flex items-center justify-center gap-x-2 bg-red-600 text-white rounded-full md:px-8 px-6 py-3'>
              Hire Me
              <span className='text-white flex items-center pl-2'>
                <FiArrowUpRight className='group-hover:rotate-45 ease-in-out duration-300' />
              </span>
            </Link>
          </div>
        </div>
        <div className='md:w-[45%] w-full h-auto justify-end flex sm:py-9'>
          {/* scale has value from 110 to 150 */}
          <img src={Profile} className='w-full aspect-square' />
        </div>
      </div>
    </>
  )
}
export default About