import React from "react";

const GifListItem = ({ gif, onGifSelect }) => {
	return (
		<li className="gifs__list-item"
			data-c-gif-list-item
			onClick={() => onGifSelect(gif)}
		>
			<div className="gifs__list-item-image-wrapper">
				<img className="gifs__list-item-image" src={gif.images.fixed_height.webp} alt="gif" width="100%" height="auto" />
				<h3>{gif.title}</h3>
			</div>

		</li>
	);
};

export default GifListItem;
