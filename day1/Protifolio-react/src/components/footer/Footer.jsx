import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaFacebookF, FaGithub, FaLinkedin, FaX } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Profile from '../../assets/Kushal.png'
import { FaTwitter } from 'react-icons/fa';

function Footer() {
    const [open, SetOpen] = useState(false)

    const navbarItems = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "About", link: "/about" },
        { id: 3, name: "Projects", link: "/projects" },
        { id: 4, name: "Contact", link: "/contact" },
    ];
    const onToggle = () => {
        SetOpen(!open);
    }
    const Social = [
        { id: 1, icon: <FaFacebookF />, link: "/" },
        { id: 2, icon: <FaInstagram />, link: "/" },
        { id: 3, icon: <FaTwitter />, link: "/" },
    ]

    return (
        <div className='border-b border-neutral-300 lg:px-28 md:16 sm:px-7 px-4 flex items-center justify-between h-[8ch] w-100 relative'>
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
                    open ?
                        // it shows triple dash button
                        <FaX />
                        :
                        // it shows cross button
                        <FaBars />
                }
            </button>

            {/* nav-items */}
            {/* in this ` is used to input the condition and $ sign is used to show variable ? "css": "css" */}
            <div className={`${open ? 'flex' : 'hidden'} md:w-fit w-full md:relative absolute bottom-10 left-0 md:bg-transparent bg-red-500 md:flex md:flex-row flex-col items-center gap-x-5`}>

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
        // <>
        //     <div className='bg-neutral-950 flex flex-col gap-y-4 items-center justify-center px-28  py-5'>

        //         <div className='flex flex-col gap-y-4'>
        //             {/* contact btn in footer */}
        //             <h3 className='text-2xl text-white tracking-wide'>Get in Contact</h3>
        //             {/* social media content */}
        //             <div className='flex flex-row gap-x-4'>
        //                 {Social.map((item)=>(
        //                     <Link to={item.link} className='h-10 w-10 flex items-center justify-center rounded-full  bg-red-500 text-neutral-300'>
        //                         {item.icon}
        //                     </Link>
        //                 ))}
        //             </div>
        //         </div>
        //         <div className=''>
        //             <ul className='list-none flex flex-row'>
        //                 <li>
        //                     {navbarItems.map((item) => (
        //                         <Link to={item.link} className='text-xl font-light text-neutral-300 px-2 tracking-wide'>
        //                             {item.name}
        //                         </Link>
        //                     )
        //                     )}
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </>
    )
}

export default Footer