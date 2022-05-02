import React, { useEffect, useState } from 'react';
import { MdVerified } from 'react-icons/md';
import { Link } from 'react-router-dom';
import success from '../../../../images/ordersuccess.png';



const OrderSuccessful = () => {


    return (
        <main className=" h-screen banner">
            <div className="max-w-screen-xl py-20 mx-auto px-6">
                
                    <>
                        <div className="flex flex-col items-center justify-center h-3/4 pt-24">
                            <h1 className="text-3xl text-center text-primary font-semibold poppins flex space-x-6 items-center ">
                                <MdVerified className="text-primary green-500 text-3xl" /> {" "}
                                Order Successful!!!</h1>
                            <img className="w-96 object-contain" src={success} alt="orderSuccessful" />

                            <Link to = "/"><button className="red text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105" >Go back to home</button></Link>
                        </div>
                    </>

            </div >
        </main >
    )
}

export default OrderSuccessful;