import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../images/logo2.png" ;
import {FcGoogle} from 'react-icons/fc';
import TextField from './../../Shared/Form/Textfield';
import useAuth from './../../../Hooks/useAuth';
const Login = () => {
    const [userInput, setUserInput] = useState({
        email: '',
        password: '',
    })
    const { signInUser } = useAuth();

        // handle change
    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserInput(prev => {
            return {
                ...prev,
                [name]: value
            }
        })

    }
    //handle submit form 
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signInUser(userInput.email, userInput.password)
    }

    //form inputs
    const Inputs = [
        { id: 1, type: "email", placeholder: "Email", value: `${userInput.email}`, name: 'email' },
        { id: 2, type: "password", placeholder: "Password", value: `${userInput.password}`, name: 'password' },
    ]
    return (
        <div>
            <section className='bg-back-image h-screen  bg-cover bg-center bg-[#FCF4E0] '>
                <div className='py-32'>
                    <img className='text-center m-auto w-52' src={logo} alt="" />
                    <div className='flex justify-center'>
                        <form className='bg-white w-96 mt-6 p-4 rounded-lg shadow-lg'>
                            <div  className='flex flex-col space-y-6'>
                            {Inputs.map(input => (
                            <TextField
                                key={input.id}
                                type={input.type}
                                placeholder={input.placeholder}
                                value={input.value}
                                name={input.name}
                                onChange={handleChange}
                            />
                        ))}
                            </div>
                            <button className="w-full py-3 bg-[#f91944] text-white ring-red-400 focus:outline-none focus:ring-4 mt-6 rounded-lg transition duration-300 poppins ">Sign in</button>
                            <Link to="/signup">
                                <p className="text-base text-red text-center my-6 hover:underline">Need an account?</p>
                            </Link>
                            <div className="border-t border-gray-200 mt-6 bg">
                            <p className="text-center text-gray-400 py-4">OR </p>
                            <div className="flex items-center space-x-3 justify-center border border-gray-300 rounded-lg w-full py-3 cursor-pointer hover:bg-gray-100" >
                                <FcGoogle className="w-6 h-6" />
                                <span className="poppins">Sign In With Google</span>
                            </div>
                            </div>
                            {/* most delayed project */}
                        </form>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Login;