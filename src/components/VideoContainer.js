import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const res = await fetch(YOUTUBE_VIDEOS_API);
    const data = await res.json();
    console.log(data);
    setVideos(data?.items);
  };

  return (
    <div className="my-4 grid grid-flow-row grid-cols-3">
      {videos.length > 0 &&
        videos?.map((video) => (
          <Link key={video.etag} to={`/watch?v=${video.id}`}>
            <VideoCard info={video}></VideoCard>
          </Link>
        ))}
    </div>
  );
};

export default VideoContainer;
