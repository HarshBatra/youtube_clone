import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_INFO_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "../components/CommentContainer.js";
import LiveChat from "../components/LiveChat.js";
import { FaUserCircle } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

const WatchPage = () => {
  const [video, setVideo] = useState(null);
  useEffect(() => {
    getVideo();
  }, []);

  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));

  function formatNumber(number) {
    if (number >= 1000000) {
      return parseInt(number / 1000000, 10) + "M";
    }
    if (number >= 1000) {
      return parseInt(number / 1000, 10) + "K";
    } else {
      return number;
    }
  }

  const getVideo = async () => {
    const res = await fetch(
      YOUTUBE_VIDEO_INFO_API +
        "&id=" +
        searchParams.get("v") +
        "&key=" +
        process.env.REACT_APP_GOOGLE_API_KEY
    );
    const data = await res.json();
    setVideo(data);
    //console.log(data);
    //console.log(data?.items[0]?.snippet?.title);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="my-4 px-10 flex flex-col justify-center">
      <div className="m-4 flex justify-center">
        <iframe
          width="960"
          height="540"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="Playing Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-2xl"
        ></iframe>
        <div className="m-4 w-1/4">
          <LiveChat />
        </div>
      </div>
      <div className="mx-8 my-4 font-bold text-xl">
        {video?.items[0]?.snippet?.title}
      </div>
      <div className="mx-8 flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <FaUserCircle className="w-8 h-8 text-gray-500" />
          <div className="text-gray-800">
            {video?.items[0]?.snippet?.channelTitle}
          </div>
          <div className="px-4 py-2 bg-red-600 hover:bg-gray-600 text-white rounded-2xl cursor-pointer">
            Subscribe
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="px-4 py-2 cursor-pointer flex items-center gap-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-2xl">
            <AiOutlineLike />{" "}
            {formatNumber(video?.items[0]?.statistics?.likeCount)} |{" "}
            <AiOutlineDislike />
          </div>
          <div className="px-4 py-2 cursor-pointer flex items-center gap-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-2xl">
            <IoIosShareAlt /> Share
          </div>
          <div className="px-4 py-2 cursor-pointer flex items-center gap-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-2xl">
            <MdDownload /> Download
          </div>
        </div>
      </div>
      <div className="m-8 flex justify-center">
        <CommentContainer vidId={searchParams.get("v")} />
      </div>
    </div>
  );
};

export default WatchPage;
