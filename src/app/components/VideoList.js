import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = (props) => (
	<ul className="videos__video-list">
		{props.videos.map((video) => (
			<VideoListItem onVideoSelect={props.onVideoSelect} key={video.etag} video={video} />
		))}
	</ul>
);

export default VideoList;
