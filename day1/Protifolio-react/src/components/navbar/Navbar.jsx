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
            <div className={`${open ? "absolute top-16 left-0 w-full bg-red-500 flex-col py-3" : "relative md:flex hidden"} md:flex align-center gap-x-5 md:flex-row flex-col`}>

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