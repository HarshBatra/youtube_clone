import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddFill } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => getSearchResults(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const getSearchResults = async () => {
    const res = await fetch(YOUTUBE_SEARCH_API + search);
    const data = await res.json();
    //console.log(data);
    setSuggestions(data[1]);
  };

  return (
    <div className="flex justify-between items-center px-8 border-b-2 py-3">
      <div className="flex items-center gap-2">
        <LuMenu
          className="w-6 h-6 cursor-pointer"
          onClick={toggleMenuHandler}
        />
        <a href="/">
          <img alt="logo" src="/assets/logo" className="w-24 cursor-pointer" />
        </a>
      </div>
      <div>
        <div className="flex items-center">
          <input
            placeholder="Search"
            className="border border-gray-300 rounded-l-full px-4 py-1 w-80"
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <div className="p-1 px-3 border-2 border-gray-300 bg-gray-300 hover:bg-gray-400 hover:border-gray-400 rounded-r-full cursor-pointer">
            <IoIosSearch className="w-6 h-6 text-white" />
          </div>
          <div className="p-2 mx-2  border-gray-300 bg-gray-300 hover:bg-gray-400 rounded-full cursor-pointer">
            <FaMicrophone className="w-5 h-5 text-white" />
          </div>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white drop-shadow-lg rounded-lg border-gray-200 border w-80">
            {suggestions.map((suggestion, index) => {
              return (
                <div
                  key={index}
                  className="text-sm text-gray-500 p-2 hover:bg-gray-100 rounded-lg flex items-center"
                >
                  <IoIosSearch className="w-4 h-4 mr-2" />
                  {suggestion}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="flex gap-6">
        <RiVideoAddFill className="w-6 h-6 cursor-pointer" />
        <IoIosNotificationsOutline className="w-6 h-6 cursor-pointer" />
        <FaUserCircle className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
