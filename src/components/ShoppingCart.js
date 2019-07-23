import React, { useContext } from 'react';

// Components
import Item from './ShoppingCartItem';
import { CartContext } from '../contexts/CartContext'

const ShoppingCart = () => {
	const { cart, deleteItem } = useContext(CartContext)
	// const value = localStorage.getItem(`${cart.id}`)
	const newObj = JSON.parse(localStorage.getItem('1'))
	console.log("value", newObj)

	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{Object.values(localStorage).map(item => (
				<Item key={item.id} {...item} deleteItem={deleteItem} item={newObj} />
			))}
			
			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
				
			</div>
		</div>
	);
};

export default ShoppingCart;
