import React from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { MdOutlineHistory } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import { MdLocalMovies } from "react-icons/md";
import { HiSignal } from "react-icons/hi2";
import { SiYoutubegaming } from "react-icons/si";
import { MdSportsSoccer } from "react-icons/md";
import { IoBulbOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { GoReport } from "react-icons/go";
import { MdOutlinedFlag } from "react-icons/md";
import { MdHelpOutline } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return !isMenuOpen ? null : (
    <div className="p-4 w-1/6 flex flex-col gap-2">
      <Link to="/">
        <div className="rounded-lg p-2 hover:bg-gray-200 flex cursor-pointer">
          <IoMdHome className="w-6 h-6 mr-6" /> Home
        </div>
      </Link>
      <div className="rounded-lg p-2 hover:bg-gray-200 flex cursor-pointer">
        <SiYoutubeshorts className="w-6 h-6 mr-6" /> Shorts
      </div>
      <div className="rounded-lg p-2 hover:bg-gray-200 flex cursor-pointer">
        <MdSubscriptions className="w-6 h-6 mr-6" /> Subscriptions
      </div>
      <div className="border my-1"></div>
      <div className="font-bold m-2">You</div>
      <div className="rounded-lg p-2 hover:bg-gray-200 flex cursor-pointer">
        <GrChannel className="w-6 h-6 mr-6" /> Your Channel
      </div>
      <div className="rounded-lg p-2 hover:bg-gray-200 flex cursor-pointer">
        <MdOutlineHistory className="w-6 h-6 mr-6" /> History
      </div>
      <div className="rounded-lg p-2 hover:bg-gray-200 flex cursor-pointer">
        <MdOutlineWatchLater className="w-6 h-6 mr-6" /> Watch Later
      </div>
      <div className="rounded-lg p-2 hover:bg-gray-200 flex cursor-pointer">
        <AiOutlineLike className="w-6 h-6 mr-6" /> Liked Videos
      </div>
      <div className="border my-1"></div>
      <div className="font-bold m-2">Subscriptions</div>
      <div className="rounded-lg p-2 hover:bg-gray-200 flex cursor-pointer">
        <FaYoutube className="w-6 h-6 mr-6 text-red-600" /> Subscriber 1
      </div>
      <div className="rounded-lg p-2 hover:bg-gray-200 flex cursor-pointer">
        <FaYoutube className="w-6 h-6 mr-6 text-red-600" /> Subscriber 2
      </div>
      <div className="rounded-lg p-2 hover:bg-gray-200 flex cursor-pointer">
        <FaYoutube className="w-6 h-6 mr-6 text-red-600" /> Subscriber 3
      </div>
      <div className="border my-1"></div>
      <div className="font-bold m-2">Explore</div>
      <div className="rounded-lg p-2 hover:bg-gray-200 flex cursor-pointer">
        <IoIosTrendingUp className="w-6 h-6 mr-6" /> Trending
      </div>
      <div className="rounded-lg p-2 hover:bg-gray-200 flex cursor-pointer">
        <MdLocalMovies className="w-6 h-6 mr-6" /> Movies
      </div>
      <div className="rounded-lg p-2 hover:bg-gray-200 flex cursor-pointer">
        <HiSignal className="w-6 h-6 mr-6" /> Live
      </div>
      <div className="rounded-lg p-2 hover:bg-gray-200 flex cursor-pointer">
        <SiYoutubegaming className="w-6 h-6 mr-6" /> Gaming
      </div>
      <div className="rounded-lg p-2 hover:bg-gray-200 flex cursor-pointer">
        <MdSportsSoccer className="w-6 h-6 mr-6" /> Sports
      </div>
      <div className="rounded-lg p-2 hover:bg-gray-200 flex cursor-pointer">
        <IoBulbOutline className="w-6 h-6 mr-6" /> Learning
      </div>
      <div className="border my-1"></div>
      <div className="rounded-lg p-2 hover:bg-gray-200 flex cursor-pointer">
        <IoSettingsOutline className="w-6 h-6 mr-6" /> Settings
      </div>
      <div className="rounded-lg p-2 hover:bg-gray-200 flex cursor-pointer">
        <MdOutlinedFlag className="w-6 h-6 mr-6" /> Report
      </div>
      <div className="rounded-lg p-2 hover:bg-gray-200 flex cursor-pointer">
        <GoReport className="w-6 h-6 mr-6" /> Feedback
      </div>
      <div className="rounded-lg p-2 hover:bg-gray-200 flex cursor-pointer">
        <MdHelpOutline className="w-6 h-6 mr-6" /> Help
      </div>
    </div>
  );
};

export default Sidebar;
