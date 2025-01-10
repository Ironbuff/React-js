import React, { useState } from 'react'
import { FaBars, FaX } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const SideNavbar = () => {
    //   navba 
    const navitem = [
        { id: 1, name: "Home", link: "/" },
        { id: 2, name: "AboutUs", link: "/" },
        { id: 3, name: "Services", link: "/" },
        { id: 4, name: "Portfolio", link: "/" },
        { id: 5, name: "Contact Us", link: "/" },
    ]

    const [open, SetOpen] = useState(false);

    const onToggle = () => {
        SetOpen(!open)
    }

    return (
        <div className='flex flex-row h-[8ch] justify-between md:px-28 px-4 w-full border-neutral-200 border-b relative'>
            <div className='flex flex-row w-fit items-center gap-12'>
                {/* logo section */}
                <h1 className='text-3xl text-red-600 tracking-wide font-semibold md:pr-16 pr-0'>
                    PORT
                    <span className='text-neutral-900'>
                        FOLIO
                    </span>
                </h1>
            </div>
            <button onClick={onToggle} className='w-8 h-8 rounded-md md:hidden flex text-xl pt-1.5 items-center'>
                    {
                        open ?
                            <FaX />
                            :
                            <FaBars />
                    }
                </button>
            {/* here flex-1 take other content in flex with other */}
            <div className={`${open ? 'flex' :'hidden'} md:flex items-center md:justify-between md:flex-row flex-col 
            md:relative absolute top-20 left-0 md:top-0 md:bg-transparent bg-red-500 w-full h-auto gap-y-3 `}>
                <div className='flex items-center'>
                    <ul className='gap-5 flex items-center md:flex-row flex-col tracking-wide'>
                        {/* putting name object of navitem array in navbar */}
                        {navitem.map((item) => (
                            <li className='text-base font-light tracking-wide' key={item.id}>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex'>
                    {/* Hire Me Button */}
                <Link to="/" className='px-10 py-3 rounded-full bg-neutral-800 text-neutral-100 hover:bg-red-600 transition-all ease-in-out duration-300 '>
                    Hire Me
                </Link>
                </div>
            </div>
        </div>
    )
}

export default SideNavbar