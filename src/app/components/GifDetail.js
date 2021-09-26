import React from "react";
import { useSelector } from "react-redux";
import { selectSelectedGif } from "../store/selectors";

const GifDetail = () => {
	const selectedGif = useSelector(selectSelectedGif);

	if (!selectedGif || Object.keys(selectedGif).length === 0) return null;

	return (
		<div className="gif-detail">
			<div className="gif-detail__embed-wrapper">
				<img className="gif-detail__embed" alt={selectedGif.title} src={selectedGif.images.downsized_large.url} width="100%" height="auto" title="gif-detail" />
			</div>
			<div className="gif-detail__details">
				<h3 className="gif-detail__title">{selectedGif.title}</h3>
				<div className="gif-detail__user-details">
					<span className="gif-detail__username">{selectedGif.user?.display_name}</span>
					{selectedGif.user?.avatar_url && (
						<img className="gif-detail__user-image" src={selectedGif.user?.avatar_url} alt="credit" />
					)}
					<p className="gif-detail__user-description">{selectedGif.user?.description}</p>
				</div>
			</div>
		</div>
	);
};

export default GifDetail;
