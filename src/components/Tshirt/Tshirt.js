import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt, handleAdddToCart}) => {
    const {picture, name, price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <p>{name}</p>
            <p>Price:{price} </p>
            <button onClick={()=>handleAdddToCart(tshirt)}>Buy This</button>
        </div>
    );
};

export default Tshirt;