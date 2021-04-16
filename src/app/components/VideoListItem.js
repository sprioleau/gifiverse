import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
	const imgUrl = video.snippet.thumbnails.high.url;

	return (
		<li className="videos__list-item" onClick={() => onVideoSelect(video)}>
			<div className="videos__list-item-image-wrapper">
				<img className="videos__list-item-image" src={imgUrl} alt="video" width="100%" height="auto" />
			</div>
			<h3 className="videos__list-item-title">{video.snippet.title}</h3>
		</li>
	);
};

export default VideoListItem;
