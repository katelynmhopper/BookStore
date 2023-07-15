import { BookSku } from "./BookSku";

export const Books = ({
	books,
	handleAddToCart,
	handleAddToFavorites,
	handleAddQuantity,
}) => {
	return (
		<div className='book-container'>
			{books.map((book) => (
				<BookSku
					bookInfo={book}
					key={book.isbn13}
					handleAddToFavorites={handleAddToFavorites}
					handleAddToCart={handleAddToCart}
					handleAddQuantity={handleAddQuantity}
				/>
			))}
		</div>
	);
};
