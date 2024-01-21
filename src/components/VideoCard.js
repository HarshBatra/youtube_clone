import React from "react";
import { FaUserCircle } from "react-icons/fa";

const VideoCard = ({ info }) => {
  //console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

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

  return (
    <div className="m-4 p-4 hover:bg-gray-200 rounded-xl cursor-pointer flex flex-col">
      <img
        alt="video"
        className="rounded-xl mb-4"
        src={thumbnails.medium.url}
      />
      <div className="flex">
        <FaUserCircle className="w-8 h-8 text-gray-500 mx-4" />
        <div className="flex flex-col">
          <div className="font-semibold mb-1">
            {title.length > 50 ? title.slice(0, 50) + "..." : title}
          </div>
          <div className="text-xs">{channelTitle}</div>
          <div className="text-xs">
            {formatNumber(statistics.viewCount)} views
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
