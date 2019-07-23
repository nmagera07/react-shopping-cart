import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './contexts/ProductContext'
import { CartContext } from './contexts/CartContext'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		const newItem = JSON.stringify(item)
		if(item.id === 1) {
			 localStorage.setItem(`${item.id}`, `${newItem}`)
		} else if(item.id === 2) {
			 localStorage.setItem(`${item.id}`, `${newItem}`)
		} else if(item.id === 3) {
			 localStorage.setItem(`${item.id}`, `${newItem}`)
		} else if(item.id === 4) {
			 localStorage.setItem(`${item.id}`, `${newItem}`)
		}
		
		setCart([...cart, item]);
	};

	const deleteItem = (id) => {
		localStorage.removeItem(`${id}`)
		setCart(cart.filter(item => item.id !== id))
	}

	

	console.log("products", products[0].id)
	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={ {cart, deleteItem} }>
					<Navigation  />

					{/* Routes */}
					<Route exact path="/" component={Products} />

					<Route path="/cart" component={ShoppingCart} />
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
