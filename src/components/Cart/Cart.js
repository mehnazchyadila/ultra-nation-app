import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
            let totalPopulation = 0 ;
            for (let i = 0; i < cart.length; i++) {
                const country = cart[i];
                totalPopulation = totalPopulation + country.population;
                // console.log(totalPopulation);
            }

            // const totalPopulation = cart.reduce( (sum , country) => sum + country.population ,0)
    return (
        <div>
            <h2>Cart Added : {cart.length}</h2>

            
            <h3>Total Population : {totalPopulation}</h3>
            
        </div>
    );
};

export default Cart;