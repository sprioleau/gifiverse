import React from "react";
import createTitle from "../utils/createTitle";

const VideoDetail = ({ video }) => {
	if (!video) return <div>Loading...</div>;

	const { videoId } = video.id;
	const url = `https://www.youtube.com/embed/${videoId}`;

	const titleObject = {
		tag: "h3",
		title: video.snippet.title,
		className: "video-detail__title",
	};

	return (
		<div className="video-detail">
			<div className="video-detail__embed-wrapper embed-responsive embed-responsive-16by9">
				<iframe className="video-detail__embed embed-responsive-item" src={url} title="video-detail" />
			</div>
			<div className="video-detail__details">
				<span className="video-detail__channel-title">{video.snippet.channelTitle}</span>
				{createTitle(titleObject)}
				<p className="video-detail__description">{video.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;