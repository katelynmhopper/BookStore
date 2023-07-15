import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart";
import { Books } from "./components/Books";

function App() {
	const [data, setData] = useState([]);
	const [favoriteBooks, setFavoriteBooks] = useState([]);
	const [price, setPrice] = useState(0);
	const [booksInCart, setBooksInCart] = useState([]);
	const fetchData = () => {
		fetch("https://api.itbook.store/1.0/new")
			.then((res) => res.json())
			.then((data) => setData(data.books));
	};

	const handleAddToFavorites = (book, isFav) => {
		const isFavorite = favoriteBooks.find(
			(favoriteBooks) => favoriteBooks.isbn13 === book.isbn13
		);

		const removeFavorite = favoriteBooks.filter(
			(favoriteBooks) => favoriteBooks.isbn13 !== book.isbn13
		);

		if (!isFavorite) {
			setFavoriteBooks([...favoriteBooks, book]);
		}
		if (isFav) {
			setFavoriteBooks(removeFavorite);
		}
		console.log(favoriteBooks);
	};

	const handleAddToCart = (bookInfo) => {
		setPrice(price + Number(bookInfo.price.substring(1)));

		let newCart = [...booksInCart];
		let isInCart = newCart.find((book) => book.isbn13 === bookInfo.isbn13);
		if (!isInCart) {
			isInCart = { ...bookInfo, quantity: 1 };
			newCart.push(isInCart);
		} else if (isInCart) {
			isInCart.quantity++;
		}
		setBooksInCart(newCart);
	};

	const handleAddQuantity = (id) => {
		let bookInCart = booksInCart.find((book) => book.isbn13 === id);
		// let newCart = [...cart];

		// book is in our cart -> we want to add more quantity
		if (bookInCart) {
			bookInCart.quantity++;

			const totalCart = price + Number(bookInCart.price.substring(1));

			setPrice(totalCart);
		}
	};

	const numberOfBooksInCart = booksInCart
		.map((book) => book.quantity)
		.reduce((accumulator, currentValue) => {
			return accumulator + currentValue;
		}, 0);

	useEffect(fetchData, []);

	return (
		<div className='App'>
			<div className='title'>Gracie's Book Store</div>
			<Navbar
				numberOfBooksInCart={numberOfBooksInCart}
				total={price.toFixed(2)}
			/>
			<Routes className='    display: inline-flex;'>
				<Route
					path='/'
					element={
						<Books
							books={data}
							handleAddQuantity={handleAddQuantity}
							numberOfBooksInCart={numberOfBooksInCart}
							handleAddToFavorites={handleAddToFavorites}
							handleAddToCart={handleAddToCart}
						/>
					}
				/>
				<Route
					path='cart'
					element={
						<Cart
							total={price.toFixed(2)}
							booksInCart={booksInCart}
							handleAddQuantity={handleAddQuantity}
						/>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
