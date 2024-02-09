import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const queriedVideos = useSelector((store) => store.queriedVideos);

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    setVideos(queriedVideos);
    console.log(queriedVideos);
  }, [queriedVideos]);

  const getVideos = async () => {
    const res = await fetch(YOUTUBE_VIDEOS_API);
    const data = await res.json();
    //console.log(data);
    setVideos(data?.items);
  };

  return (
    <div className="my-4 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {videos?.length > 0 &&
        videos?.map((video) => (
          <Link
            key={video.etag}
            to={`/watch?v=${
              typeof video.id === "string" ? video.id : video.id.videoId
            }`}
          >
            <VideoCard info={video}></VideoCard>
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
