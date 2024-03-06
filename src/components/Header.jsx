import React, { useRef, useState } from 'react';
import logo from '../images/logo.png'
const Header = () => {
    const [open,setOpen]=useState(false)
    const openMenu=()=>{
        setOpen(true)
    }
    const closeMenu=()=>{
        setOpen(false);
    }
    return (
        <>
            <header className='flex justify-center sm:justify-between flex-wrap gap-4  items-center py-8'>
                <a href="#">
                    <img src={logo} alt="logo" />
                </a>
                <nav className='hidden sm:flex'>
                    <ul className='flex items-center flex-wrap justify-around gap-6'>
                        <li><a className='text-gray-800 font-medium hover:text-pink-400' href="#">Academy</a></li>
                        <li><a className='text-gray-800 font-medium hover:text-pink-400' href="#">Blog</a></li>
                        <li><a className='text-gray-800 font-medium hover:text-pink-400' href="#">About</a></li>
                        <li><a className='text-gray-800 font-medium hover:text-pink-400' href="#">Work</a></li>
                        <li><a className='text-gray-800 font-medium hover:text-pink-400' href="#">Contact</a></li>
                    </ul>
                </nav> 
                <div className={open?"hamburger hidden sm:hidden flex-col gap-1 active":"hamburger flex sm:hidden flex-col gap-1"} onClick={openMenu}>
                    <div className="w-6 h-1 bg-stone-600 rounded-lg"></div>
                    <div className="w-6 h-1 bg-stone-600 rounded-lg"></div>
                    <div className="w-6 h-1 bg-stone-600 rounded-lg"></div>
                </div>
                <div className={open?"hamburger flex sm:hidden flex-col gap-1 active":"hamburger hidden sm:hidden flex-col gap-1"} onClick={closeMenu}>
                    <div className="w-6 h-1 bg-stone-600 rounded-lg"></div>
                    <div className="w-6 h-1 bg-stone-600 rounded-lg"></div>
                    <div className="w-6 h-1 bg-stone-600 rounded-lg"></div>
                </div>
                <nav className={!open?"hidden":"sm:hidden absolute w-full top-20 left-0 bg-stone-300 border"}>
                    <ul className='flex left-0 top-0 flex-col px-6 gap-6'>
                        <li><a className='text-gray-800 font-medium hover:text-pink-400' href="#">Academy</a></li>
                        <li><a className='text-gray-800 font-medium hover:text-pink-400' href="#">Blog</a></li>
                        <li><a className='text-gray-800 font-medium hover:text-pink-400' href="#">About</a></li>
                        <li><a className='text-gray-800 font-medium hover:text-pink-400' href="#">Work</a></li>
                        <li><a className='text-gray-800 font-medium hover:text-pink-400' href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
