import React from 'react';
import logo from "../../../images/logo.png";
const Footer = () => {
    return (
        <div className='bg-gray-900 text-white'>
            <section className='footer'>
                <div className='main-footer'>
                <div>
                    <img className='h-10' src={logo} alt="" />
                </div>
                <div>
                    <div>
                        <li>About Online food</li>
                        <li>Read our blog</li>
                        <li>sign up deliver</li>
                        <li>Add your restaurent</li>
                    </div>
                    <div>
                        <li>Get help</li>
                        <li>Read FAQs</li>
                        <li>View all cities</li>
                        <li>Restaurents near me</li>
                    </div>
                </div>
                </div>
                <div >
                    <div>
                        <h1>Developed by 💗 Pinky Banik</h1>
                    </div>
                    <div>
                        <h1>privacy policy</h1>
                        <h1>terms of use</h1>
                        <h1>pricing</h1>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;