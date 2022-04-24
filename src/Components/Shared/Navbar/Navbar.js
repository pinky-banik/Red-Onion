import React, { useState } from 'react';
import logo from '../../../images/logo2.png'
const Navbar = () => {
    const [changeHeader, setChangeHeader] = useState(false)
    //header change function 
    const onChangeHeader = () => {
        if (window.scrollY >= 50) {
            setChangeHeader(true)
        } else {
            setChangeHeader(false)
        }
    }
    //change header by scrolling
    window.addEventListener('scroll', onChangeHeader);
    return (
            <header className={changeHeader ? "bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500" : "bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500"}>
        <div className=' flex justify-between py-5 px-10 lg:px-48'>
            <img className='h-10' src={logo} alt="" />
            <div className='flex space-x-5'>
                <h1 className='text-lg items-center flex'>Log in</h1>
                <button className='btn btn-signup'>Sign up</button>
            </div>
        </div>
        </header>
    );
};

export default Navbar;