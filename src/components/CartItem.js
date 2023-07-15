import React from "react";

export const CartItem = ({ item }) => {
	return (
		<div className='book-container-cart'>
			<img alt={item.title} src={item.image} />
			<div className='price-quantity'>
				<h3>
					Price: {item.price} Qty: {item.quantity}
				</h3>
			</div>
		</div>
	);
};
