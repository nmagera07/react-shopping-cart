import React from 'react';

const Product = props => {
	
	const useLocalStorage = () => {
		if(props.product.id === 1) {
			console.log('wooo')
		}
		props.addItem(props.product)
	}

	return (
		<div className="product">
			<img src={props.product.image} alt={`${props.product.title} book`} />

			<h1 className="title">{props.product.title}</h1>

			<p className="price">${props.product.price}</p>

			<button onClick={() => props.addItem(props.product)}>
				Add to cart
			</button>
		</div>
	);
};

export default Product;
