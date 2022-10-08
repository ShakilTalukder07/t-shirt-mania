import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveItem }) => {

let message;
if(cart.length === 0){
    message = <p>Please buy at least one item !!!</p>
}
else if(cart.length === 1){
    message = <div>
        <p>Amar jonno akta nao</p>
        <p>Nijer jonno arekta nao</p>
    </div>
}
else{
    message = <p>Thanks of buying</p>
}

    return (
        <div className='orange'>
            <h3 className={cart.length === 2 ? `skyblue` : ` purple`}>order summary  </h3>;
            <h5 className = {`bold ${cart.length === 2 ? 'blue' : 'purple'}` }>Order Quantity: {cart.length} </h5>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={()=>handleRemoveItem(tshirt)}>X</button>
                </p>)
            },
            {
                message
            },
            {
                cart.length === 3 ? <p>3 jon k gift diba ? </p> : <p>Aro kino , aro kino </p>
            },
            { <p>&& operator</p> },
            {
                cart.length === 2 && <h2>Double Item</h2>
            },
            { <p>OR operator</p>},
            {
                cart.length === 4 || <h2>4 ta item nao</h2>
            }
        </div>
    );
};

export default Cart;

/*
Conditional Rendaring--------

1. use element is a variable and the set values using if-else
2. ternary operator , condition ? true : false
3. && operator  ( if condition is true , i want to display something )
4. || operator ( if condition is false, i want to display something )

*/