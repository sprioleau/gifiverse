import React from "react";

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>;
	}

	const { videoId } = video.id;
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail">
			<div className="video-detail__embed-wrapper embed-responsive embed-responsive-16by9">
				<iframe className="video-detail__embed embed-responsive-item" src={url} title="video-detail" />
			</div>
			<div className="video-detail__details">
				<span className="video-detail__title">{video.snippet.title}</span>
				<p className="video-detail__description">{video.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
