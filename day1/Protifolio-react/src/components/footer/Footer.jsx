import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaFacebookF, FaGithub, FaLinkedin, FaX } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
   const[open,SetOpen]=useState(false)
  
      const navbarItems = [
          { id: 1, name: "Home", link: "/" },
          { id: 2, name: "About", link: "/about" },
          { id: 3, name: "Projects", link: "/projects" },
          { id: 4, name: "Contact", link: "/contact" },
      ];
  const onToggle=()=>{
    SetOpen(!open);
  }
      
  return (
    // <div className='bg-neutral-900 width-full '>
    //     This is Footer
    // </div>
    <div className='border-b border-neutral-300 lg:px-28 md:16 sm:px-7 px-4 flex items-center justify-between h-[8ch] w-100'>
            {/* logo */}
            <div className='flex align-center text-3xl font-bold'>
                <span className='text-red-600'>PORT</span>
                <span className='text-neutral-900'>FOLIO</span>
            </div>

            {/* Toggle button */}
            {/* <button onClick={onToggle} className="w-8 h-8 rounded-md md:hidden flex text-xl pt-1.5">
                {
                    open ?
                    <FaX />
                    :
                    <FaBars />
                }
            </button> */}
            <button onClick={onToggle} className="w-8 h-8 rounded-md md:hidden flex text-xl pt-1.5">
              {
                open?
                // it shows triple dash button
                <FaX/>
                :
                // it shows cross button
                <FaBars />
              }
            </button>

            {/* nav-items */}
            {/* in this ` is used to input the condition and $ sign is used to show variable ? "css": "css" */}
            <div className={`${open?"absolute bottom-16 right-0 bg-red-500 flex-col ":"relative md:flex hidden"} md:flex md:flex-row flex-col items-center gap-x-5`}>

                <ul className='flex items-center md:flex-row flex-col gap-5'>

                    {navbarItems.map((item) => (
                        <li key={item.id} className='list-none flex gap-3 font-normal'>
                            <Link to={item.link} className='text-neutral-900 hover:text-red-500 transition-all ease-in-out duration-300'>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* social-items */}
                <div className='gap-x-4 md:flex items-center'>
                    <FaFacebookF size={15} className='text-red-600' />
                    <FaInstagram size={15} className='text-red-600' />
                    <FaXTwitter size={15} className='text-red-600' />
                </div>
            </div>
        </div>
  )
}

export default Footer