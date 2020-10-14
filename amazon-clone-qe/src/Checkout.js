import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import './Checkout.css';

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
      <div className="checkout">
        <img
          className="checkout__ad" 
          src="https://images-eu.ssl-images-amazon.com/images/G/02/Events/2020/APDHF/AMZ_PD20_UK_EN_GW005_Day2_NonGifting_08_1500x300._CB403915030_.jpg" 
          alt="" 
        />
    
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is Empty</h2>
            <p>You have no item in your basket. To buy one or more items, click
               "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>

            {/* List out all of the Checkout Products */}
            {basket.map(item => (
              <CheckoutProduct 
                item={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
            
          </div>
        )}
      </div>
    );
}

export default Checkout;
