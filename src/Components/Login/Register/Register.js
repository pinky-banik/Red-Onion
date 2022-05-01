import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../images/logo2.png" ;
import {FcGoogle} from 'react-icons/fc';
const Register = () => {
    return (
        <div>
            <section className='bg-back-image h-screen  bg-cover bg-center bg-[#FCF4E0] '>
                <div className='py-32'>
                    <img className='text-center m-auto w-52' src={logo} alt="" />
                    <div className='flex justify-center'>
                        <form className='bg-white w-96 mt-6 p-4 rounded-lg shadow-lg'>
                            <div  className='flex flex-col space-y-6'>
                                <input placeholder='Email' className='w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl'></input>
                                <input placeholder='Password' className='w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl'></input>
                                <input placeholder='Profile Picture Link' className='w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl'></input>
                            </div>
                            <button className="w-full py-3 bg-[#f91944] text-white ring-red-400 focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300 poppins ">Sign in</button>
                            <Link to="/signup">
                                <p className="text-base text-red text-center my-6 hover:underline">Already have an account?</p>
                            </Link>
                            <div className="border-t border-gray-200 mt-6 bg">
                            <p className="text-center text-gray-400 py-4">OR </p>
                            <div className="flex items-center space-x-3 justify-center border border-gray-300 rounded-lg w-full py-3 cursor-pointer hover:bg-gray-100" >
                                <FcGoogle className="w-6 h-6" />
                                <span className="poppins">Sign Up With Google</span>
                            </div>
                            </div>

                        </form>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Register;