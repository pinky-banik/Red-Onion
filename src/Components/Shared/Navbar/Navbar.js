import React, { useState } from 'react';
import logo from '../../../images/logo2.png';
import { BsCart2 } from 'react-icons/bs';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useOrder } from '../../../Context/OrderProvider';
const Navbar = () => {
    const [changeHeader, setChangeHeader] = useState(false);
    const { order } = useOrder();
    const navigate = useNavigate();
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
            <Link to ="/"><img className='h-10' src={logo} alt="" /></Link>
            <div className='flex'>
            <div className="p-2 relative flex cursor-pointer" onClick={() => navigate('/orders')}>
                                <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center  text-white poppins absolute -right-2 -top-1.5">{order.length}</span>
                                <BsCart2 className="cursor-pointer w-6 h-6 text-gray-700" />
                            </div>
            <div className='mx-5 flex space-x-5'>
                <NavLink to ="/orders"><button className='btn btn-signup'>Orders</button></NavLink>
            </div>
            </div>
        </div>
        </header>
    );
};

export default Navbar;