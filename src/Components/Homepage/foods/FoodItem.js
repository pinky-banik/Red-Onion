import React from 'react';
import { useNavigate } from 'react-router-dom';

const FoodItem = ({image,title,description,price,type}) => {
    const navigate = useNavigate();
    const handleRoute = () => {
        navigate(`/foods/${title}`);
    }
    return (
        <div className='bg-white border-2 border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative'>
            <span className='bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4'>{type}</span>
            <img className='w-64 mx-auto transform transition duration-300 hover:scale-105' src={image} alt={title} />
            <div className='text-center'>
            <h1 className="text-gray-900 poppins text-lg">{title}</h1>
            <p className='text-gray-500 font-poppins text-sm text-center'>{description.slice(0,50)}</p>
            <h2 className='text-gray-900 font-poppins text-2xl font-bold'>${price}</h2>
            <button onClick={handleRoute} className='btn px-10 py-2 m-3 transform transition duration-300 hover:scale-105'>Order Now</button>
            </div>
        </div>
    );
};

export default FoodItem;