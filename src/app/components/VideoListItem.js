import React from "react";
import createTitle from "../utils/createTitle";

const VideoListItem = ({ video, onVideoSelect }) => {
	const { url: imgUrl } = video.snippet.thumbnails.high;

	const titleObject = {
		tag: "h3",
		title: video.snippet.title,
		className: "videos__list-item-title",
		key: video.etag,
	};

	return (
		<li className="videos__list-item" onClick={() => onVideoSelect(video)}>
			<div className="videos__list-item-image-wrapper">
				<img className="videos__list-item-image" src={imgUrl} alt="video" width="100%" height="auto" />
			</div>
			{createTitle(titleObject)}
		</li>
	);
};

export default VideoListItem;
