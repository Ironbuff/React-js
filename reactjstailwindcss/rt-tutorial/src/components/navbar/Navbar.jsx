import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='w-full h-[8ch] flex items-center justify-between bg-indigo-500 px-28'>
            {/* Logo */}
            <Link to="/" className='text-2xl font-bold text-neutral-50'>Logo</Link>

            {/* navitems */}
            <ul className="flex items-center gap-6">
                <li className="text-base text-neutral-100 font-normal">
                    <Link to="/" className='hover:text-red-500 ease-in-out duration-300'>
                        Home
                    </Link>
                </li>
                <li className="text-base text-neutral-100 font-normal">
                    <Link to="/about" className='hover:text-red-200 ease-in-out duration-300'>
                        About
                    </Link>
                </li>
                <li className="text-base text-neutral-100 font-normal">
                    <Link to="/" className='hover:text-red-500 ease-in-out duration-300'>
                        Home
                    </Link>
                </li>
                <li className="text-base text-neutral-100 font-normal">
                    <Link to="/" className='hover:text-red-500 ease-in-out duration-300'>
                        Home
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar