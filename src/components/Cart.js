import React from "react";
import { CartItem } from "./CartItem";

export const Cart = ({ booksInCart, total }) => {
	return (
		<React.Fragment>
			<div className='cart-page'>
				<h1> Cart </h1>
				<div className='cart-layout'>
					{booksInCart.map((book) => (
						<CartItem item={book} key={book.isbn13} quantity={book.quantity} />
					))}
				</div>
				<h3>Total: ${total} </h3>
			</div>
		</React.Fragment>
	);
};
