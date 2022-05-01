import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import About from '../About/About';
import FoodItem from '../foods/FoodItem';
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