import React from "react";

const VideoListItem = (props) => {
	const imgUrl = props.video.snippet.thumbnails.default.url;

	return (
		<li className="videos__list-item" onClick={() => props.onVideoSelect(props.video)}>
			<div className="videos__list-item-image-wrapper">
				<img className="videos__list-item-image" src={imgUrl} alt="video" />
			</div>
			<h3 className="videos__list-item-title">{props.video.snippet.title}</h3>
		</li>
	);
};

export default VideoListItem;
