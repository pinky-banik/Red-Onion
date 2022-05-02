import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Foods from '../foods/Foods';
import Header from '../Header/Header';

const Home = () => {
    
    
    return (
        <div>
            <Header></Header>
            <Foods></Foods>
            <About></About>
            <Footer></Footer>
        </div>
            
    );
};

export default Home;