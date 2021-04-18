import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = ({ videos, onVideoSelect }) => (
	<ul className="videos__video-list">
		{videos.map((video) => (
			<VideoListItem onVideoSelect={onVideoSelect} key={video.etag} video={video} />
		))}
	</ul>
);

export default VideoList;
