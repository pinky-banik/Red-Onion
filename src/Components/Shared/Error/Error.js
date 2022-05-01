import React from 'react';
import { Link } from 'react-router-dom';
import error from "../../../images/error.png";
const Error = () => {
    return (
        <main className="bg-back-image h-[50rem] bg-cover bg-center ">
        <div className="max-w-screen-xl py-20 mx-auto px-6">
            <div className="flex flex-col items-center justify-center h-3/4 pt-24">
                <img className="w-96 object-contain" src={error} alt="error" />

                <Link to ="/">
                <button className="bg-[#f91944] text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105" >Go back to home</button></Link>
            </div>
            </div>
    </main>
    );
};

export default Error;