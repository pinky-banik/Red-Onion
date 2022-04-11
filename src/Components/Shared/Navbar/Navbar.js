import React from 'react';
import logo from '../../../images/logo2.png'
const Navbar = () => {
    return (
        <div className=' flex justify-between py-5 px-48'>
            <img className='h-12' src={logo} alt="" />
            <div className='flex space-x-5'>
                <h1 className='text-lg items-center flex'>Log in</h1>
                <button className='btn btn-signup'>Sign up</button>
            </div>
        </div>
    );
};

export default Navbar;