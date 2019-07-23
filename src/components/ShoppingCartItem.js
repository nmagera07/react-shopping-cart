import React from 'react';

const Item = props => {
	console.log("props", props)
	return (
		<div className="shopping-cart_item">
			<img src={props.item.image} alt={`${props.title} book`} />
			

			<div>
				<h1>{props.item.title}</h1>
				<p>$ {props.item.price}</p>
				
				<button onClick={() => props.deleteItem(props.id)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
