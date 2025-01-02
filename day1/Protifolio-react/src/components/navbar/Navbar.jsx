import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = (props) => {
    return (
        <div className='border-b border-neutral-300 px-28 flex items-center justify-between h-[8ch] w-100'>
            {/* logo */}
            <div className='flex align-center text-2xl font-bold'>
                <span className='text-red-600'>PORT</span>
                <span className='text-neutral-900'>FOLIO</span>
            </div>
            {/* nav-items */}
            <div className='flex align-center gap-x-5'>
                <ul>
                    <li className='list-none flex gap-3 font-normal'>
                        <Link to="/" className='text-neutral-900 hover:text-red-500 transition-all ease-in-out duration-300'>
                            Home
                        </Link>
                        <Link to="/" className='text-neutral-900 hover:text-red-500 transition-all ease-in-out duration-300'>
                            About
                        </Link>
                        <Link to="/" className='text-neutral-900 hover:text-red-500 transition-all ease-in-out duration-300'>
                            Projects
                        </Link>
                        <Link to="/" className='text-neutral-900 hover:text-red-500 transition-all ease-in-out'>
                            Contact
                        </Link>
                    </li>
                </ul>
                {/* social-items */}
                <div className='gap-x-4 flex items-center'>
                  <FaFacebookF size={15} className='text-red-600' />
                  <FaInstagram size={15} className='text-red-600'/>
                  <FaXTwitter size={15} className='text-red-600'/>
                </div>
            </div>
        </div>
    )
}

export default Navbar