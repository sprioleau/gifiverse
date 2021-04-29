import React from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoListItem from "./VideoListItem";
import { selectVideos } from "../store/selectors/index";
import { setSelectedVideo } from "../store/actions";

const VideoList = () => {
	const dispatch = useDispatch();
	const videos = useSelector(selectVideos);

	if (videos?.length === 0) return <h2>Loading...</h2>;

	const onVideoSelect = (userSelectedVideo) => {
		dispatch(setSelectedVideo(userSelectedVideo));
		window.scroll({ top: 0, left: 0, behavior: "smooth" });
	};

	return (
		<ul className="videos__video-list">
			{videos.map((video) => (
				<VideoListItem onVideoSelect={onVideoSelect} key={video.etag} video={video} />
			))}
		</ul>
	);
};

export default VideoList;
