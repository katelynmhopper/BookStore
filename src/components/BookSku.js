import { useState } from "react";

export const BookSku = ({
	bookInfo,
	handleAddToFavorites,
	handleAddToCart,
}) => {
	const [isFavorite, setIsFavorite] = useState(false);

	const handleClick = () => {
		setIsFavorite(!isFavorite);
		handleAddToFavorites(bookInfo, isFavorite);
	};

	return (
		<div className='book-sku'>
			<div className='imageIcon'>
				<p onClick={handleClick} className='favorite'>
					{isFavorite ? "★" : "☆"}
				</p>
				<img src={bookInfo.image} alt={bookInfo.title} />
			</div>
			<h3> {bookInfo.title}</h3>
			<div className='cart'>
				<p className='price'>{bookInfo.price}</p>
				<button
					className='cartButton'
					onClick={() => handleAddToCart(bookInfo)}
				>
					Add to Cart
				</button>
			</div>
		</div>
	);
};
