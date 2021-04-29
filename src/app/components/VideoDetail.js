import React from "react";
import { useSelector } from "react-redux";
import { selectSelectedVideo } from "../store/selectors";

const VideoDetail = () => {
	const selectedVideo = useSelector(selectSelectedVideo);

	if (Object.keys(selectedVideo).length === 0) return null;

	const { videoId } = selectedVideo?.id;
	const url = `https://www.youtube.com/embed/${videoId}`;

	// prettier-ignore
	const createTitle = () => React.createElement("h3", {
		dangerouslySetInnerHTML: { __html: selectedVideo.snippet.title },
		className: "video-detail__title",
	});

	return (
		<div className="video-detail">
			<div className="video-detail__embed-wrapper embed-responsive embed-responsive-16by9">
				<iframe className="video-detail__embed embed-responsive-item" src={url} title="video-detail" />
			</div>
			<div className="video-detail__details">
				<span className="video-detail__channel-title">{selectedVideo.snippet.channelTitle}</span>
				{createTitle()}
				<p className="video-detail__description">{selectedVideo.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
