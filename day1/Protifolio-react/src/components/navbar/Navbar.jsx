import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {

    const navbarItems = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "About", link: "/about" },
        { id: 3, name: "Projects", link: "/projects" },
        { id: 4, name: "Contact", link: "/contact" },
    ];

    return (
        <div className='border-b border-neutral-300 px-28 flex items-center justify-between h-[8ch] w-100'>
            {/* logo */}
            <div className='flex align-center text-3xl font-bold'>
                <span className='text-red-600'>PORT</span>
                <span className='text-neutral-900'>FOLIO</span>
            </div>
            {/* nav-items */}
            <div className='flex align-center gap-x-5'>
                <ul className='flex items-center gap-5'>

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