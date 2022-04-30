import React from 'react';
import logo from "../../../images/logo.png";
const Footer = () => {
    return (
        <div className='bg-gray-900 text-gray-300 px-6 py-14'>
            <section className='footer mx-14'>
                <div className='main-footer flex justify-between '>
                <div className='w-2/4'>
                    <img className='h-10' src={logo} alt="" />
                </div>
                <div className='flex justify-around w-2/4 my-5 leading-8'>
                    <div>
                        <ul>
                        <li>About Online food</li>
                        <li>Read our blog</li>
                        <li>sign up deliver</li>
                        <li>Add your restaurent</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                        <li>Get help</li>
                        <li>Read FAQs</li>
                        <li>View all cities</li>
                        <li>Restaurents near me</li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className='flex mt-14 justify-between'>
                    <div className='w-1/3'>
                        <h1 className='text-gray-500'>Developed by 💗 Pinky Banik</h1>
                    </div>
                    <div className='flex mr-16'>
                        <h1 className='mx-10'>privacy policy</h1>
                        <h1 className='mx-10'>terms of use</h1>
                        <h1 className='mx-10'>pricing</h1>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;