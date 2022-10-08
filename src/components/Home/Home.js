import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();
    // console.log(tshirts)

    const [cart, setCart] = useState([]);

    const handleAdddToCart = tshirt => {

        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
            alert('This t-shirt is already adedd');
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
            // alert('Sucessfully added');
        }
    }

    const handleRemoveItem = tshirt =>{
        const remaining = cart.filter( ts => ts._id !== tshirt._id )
        setCart(remaining);
    }

    return (
        <div className='home-container'>
            <div className="t-shirt-container">
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAdddToCart={handleAdddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                cart={cart}
                handleRemoveItem={handleRemoveItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;