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
    <div className="my-4 md:px-10 flex flex-col w-screen justify-center items-center">
      <div className="m-4 flex md:flex-row flex-col gap-2 w-fit justify-center">
        <iframe
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="Playing Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="rounded-2xl md:w-[960px] md:h-[540px] aspect-video w-full p-2"
        ></iframe>
        <div className="md:m-4 md:w-1/4 my-2 w-screen px-4 md:px-0">
          <LiveChat />
        </div>
      </div>
      <div className="md:mx-8 md:my-4 m-4 font-bold md:text-xl self-start">
        {video?.items[0]?.snippet?.title}
      </div>
      <div className="md:mx-8 flex md:items-center w-full justify-center md:justify-between">
        <div className="flex md:gap-4 gap-2 items-center">
          <FaUserCircle className="w-8 h-8 text-gray-500" />
          <div className="text-gray-800">
            {video?.items[0]?.snippet?.channelTitle}
          </div>
          <div className="px-4 py-2 bg-red-600 hover:bg-gray-600 text-white rounded-2xl cursor-pointer">
            Subscribe
          </div>
        </div>
        <div className="md:flex gap-4 items-center hidden">
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
      <div className="md:m-8 p-4 w-full flex md:justify-center">
        <CommentContainer vidId={searchParams.get("v")} />
      </div>
    </div>
  );
};

export default WatchPage;
