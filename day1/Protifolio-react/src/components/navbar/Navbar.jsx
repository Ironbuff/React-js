import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaFacebookF, FaGithub, FaLinkedin, FaX } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const navbarItems = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "About", link: "/about" },
        { id: 3, name: "Projects", link: "/projects" },
        { id: 4, name: "Contact", link: "/contact" },
    ];

    const onToggle = () => {
        setOpen(!open);
    }

    return (
        <div className='border-b border-neutral-300 lg:px-28 md:16 sm:px-7 px-4 flex items-center justify-between h-[8ch] w-100'>
            {/* logo */}
            <div className='flex align-center text-3xl font-bold'>
                <span className='text-red-600'>PORT</span>
                <span className='text-neutral-900'>FOLIO</span>
            </div>

            {/* Toggle button */}
            <button onClick={onToggle} className="w-8 h-8 rounded-md md:hidden flex text-xl pt-1.5">
                {
                    open ?
                    <FaX />
                    :
                    <FaBars />
                }
            </button>

            {/* nav-items */}
            <div className={`${open ? 'flex' : 'hidden'} md:flex items-center justify-end md:bg-transparent bg-red-600
                    md:flex-row flex-col md:relative absolute md:top-0 top-20 left-0 w-full h-auto gap-5 
                    md:gap-14 p-4 md:p-0 backdrop-blur-3xl transition-transform md:shadow-none shadow-md rounded-md`}>

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
                <div className='gap-x-4 flex items-center'>
                    <FaFacebookF size={15} className='text-red-600' />
                    <FaInstagram size={15} className='text-red-600' />
                    <FaXTwitter size={15} className='text-red-600' />
                </div>
            </div>
        </div>
    )
}

export default Navbar