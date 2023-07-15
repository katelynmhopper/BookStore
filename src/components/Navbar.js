/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import React from "react";

export const Navbar = ({ total, numberOfBooksInCart }) => {
	return (
		<div className='navRoutes'>
			<React.Fragment>
				<div className='routes'>
					<a href='/'>
						<h2>Home</h2>
					</a>
				</div>
				<div className='total'>
					<Link to='/cart '>
						<h2>
							Cart ${total}
							{numberOfBooksInCart > 0 ? `(${numberOfBooksInCart})` : ""}
						</h2>
					</Link>
				</div>
			</React.Fragment>
		</div>
	);
};
