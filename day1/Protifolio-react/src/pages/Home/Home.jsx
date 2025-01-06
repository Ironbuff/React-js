import React, { useEffect, useState } from 'react'
import { FiDownload } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from "react-icons/fi";
import ProfileImage from '../../assets/Profileimg.png';
import { FaFacebookF } from 'react-icons/fa6';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import axios from 'axios';

const Home = () => {

  const [quote, setQuote] = useState();
 
  function randomNumberInRange(min, max) {
    //  get number between min and max
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  
      



  const Social = [
    { id: 1, icon: <FaFacebookF />, link: "/" },
    { id: 2, icon: <FaInstagram />, link: "/" },
    { id: 3, icon: <FaTwitter />, link: "/" },
  ]


  const getQuote = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/quotes");
      const randomQuote = response.data.quotes[randomNumberInRange(0,30)].quote;
      console.log(randomQuote)
      return randomQuote;
    } catch (error) {
      console.error("Error fetching quote:", error);
      return null;
    }
  };
  
 

  useEffect(()=>{
     // Call the function
  getQuote().then((quote) => {
    if (quote) {
      setQuote(quote)
      
    }
  });
    
  },[])


  return (
  <>
    <div className='w-full flex items-center justify-between flex-row-reverse gap-16 lg:px-28 md:px-16 sm:px-7 md:py-0 py-8 px-4 md:flex-nowrap flex-wrap'>

      {/* photo Container */}
      <div className='md:w-[50%] w-full h-auto flex items-center justify-end' >
        <img src={ProfileImage} className='w-full aspect-square object-cover' />
      </div>

      <div className='flex justify-center items-start md:w-[45%] w-full md:h-[calc(100vh-8ch)] h-auto flex-col space-y-12'>
        <div className="space-y-6">
          <div className="space-y-4">
            {/* Content Section */}
            <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold text-red-600 flex items-center gap-4">
              <span className="text-red-950 font-black">Hi, I'm</span>  Kushal Bhandari
              {/* <span className="text-5xl text-red-700">{props.username}</span> */}
            </h1>
            {/* Secondary Content */}
            <h4 className='text-neutral-900 md:text-3xl text-xl font-semibold tracking-wide'>
              A FULL STACK DEVELOPER
            </h4>
          </div>
          {/* Main Content */}
          <p className='text-neutral-600 md:pr-8 pr-0'>
            Passionate about creating innovative web solutions and turning ideas into reality.With
            expertise in both front-end and back-end technologies,I bring a holistic approach to
            every project.
          </p>
        </div>
        <div className='md:flex gap-4 hidden'>
          {Social.map((item, ind) => (
            <Link key={ind} to={item.link} className='list-none border border-neutral-800 hover:border-red-600 rounded-full flex items-center justify-center shadow-lg bg-neutral-800 hover:bg-red-600 w-10 h-10 text-white ease-in-out duration-300'>
              {item.icon}
            </Link>
          ))}
        </div>
        {/* Two Buttons */}
        <div className="w-full flex items-center gap-x-4">
          {/* Download Cv Button */}
          <Link to="/" className='md:w-fit w-1/2 flex items-center justify-center gap-x-2 md:px-8 px-6 py-3 bg-neutral-900 text-white rounded-full'>
            Download CV
            <span className='flex items-center'>
              <FiDownload />
            </span>
          </Link>

          {/* Hire Me Button */}
          <Link to="" className='md:w-fit w-1/2 flex items-center justify-center gap-x-2 bg-red-600 text-white rounded-full md:px-8 px-6 py-3'>
            My Projects
            <span className='flex items-center'>
              <FiArrowUpRight className='text-white' />
            </span>
          </Link>
        </div>
      </div>

      

    </div>

    <div className='w-full px-28 py-6 text-center'>
    <hr />

<h4 className='pt-4' contentEditable>Quote of the day: <span className='font-bold'>
{quote}</span></h4>
    </div>

    </>

  )
}

export default Home