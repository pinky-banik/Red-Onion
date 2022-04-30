import React from 'react';

const Header = () => {
    return (
        <div>
            <section className="bg-back-image h-[40rem]  bg-cover bg-center bg-[#FCF4E0] ">
            <div className="flex flex-col items-center  justify-center h-full">
                <h1 className="text-center text-3xl md:text-4xl lg:text-5xl  font-semibold text-gray-700 poppins">Best food waiting for your belly</h1>
                <div className="rounded-full p-1 box-border mt-8 bg-white overflow-hidden ring-red-300 focus:ring-4 w-96 flex items-center ">
                    <input type="text" className=" rounded-full px-4 focus:outline-none w-full bg-transparent" placeholder="Search here ......." />
                    <button className="btn btn-search">Search</button>
                </div>
            </div>
        </section> 
        </div>
    );
};

export default Header;