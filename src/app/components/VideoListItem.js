import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
	const { url: imgUrl } = video.snippet.thumbnails.high;

	// Don't display video if it uses the default image (i.e. it doesn't have an image uploaded)
	if (imgUrl.includes("default_live.jpg")) return null;

	// prettier-ignore
	const createTitle = () =>	React.createElement("h3", {
		dangerouslySetInnerHTML: { __html: video.snippet.title },
		className: "videos__list-item-title",
	});

	return (
		<li className="videos__list-item" onClick={() => onVideoSelect(video)}>
			<div className="videos__list-item-image-wrapper">
				<img className="videos__list-item-image" src={imgUrl} alt="video" width="100%" height="auto" />
			</div>
			{createTitle()}
		</li>
	);
};

export default VideoListItem;
