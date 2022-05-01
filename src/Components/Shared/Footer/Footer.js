import React from 'react';
import logo from "../../../images/logo.png";
const Footer = () => {
    return (
        <div className='bg-gray-900 text-gray-300 px-6 py-14'>
            <section className='footer mx-14 lg:px-32'>
                <div className='main-footer sm:block md:flex justify-between '>
                <div className='w-2/4'>
                    <img className='h-10' src={logo} alt="" />
                </div>
                <div className='xs:block sm:flex justify-around  my-5 leading-8'>
                    <div className='px-5'>
                        <ul>
                        <li>About Online food</li>
                        <li>Read our blog</li>
                        <li>sign up deliver</li>
                        <li>Add your restaurent</li>
                        </ul>
                    </div>
                    <div className='px-5'>
                        <ul>
                        <li>Get help</li>
                        <li>Read FAQs</li>
                        <li>View all cities</li>
                        <li>Restaurents near me</li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className='xs:block sm:flex mt-14 justify-between'>
                    <div className='w-1/3'>
                        <h1 className='text-gray-500'>Developed by 💗 Pinky Banik</h1>
                    </div>
                    <div className='xs:block sm:flex mr-16 sm:my-5'>
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