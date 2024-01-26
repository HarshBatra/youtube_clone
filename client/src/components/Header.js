import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddFill } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { YT_SEARCH_VIDEOS_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { setQueriedVideos } from "../utils/queriedVideosSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[search]) setSuggestions(searchCache[search]);
      else getSuggestions();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const getSuggestions = async () => {
    const res = await fetch(`${YOUTUBE_SEARCH_API}?query=${search}`);
    const data = await res.json();
    //console.log(data[1]);
    setSuggestions(data[1]);
    //update cache
    dispatch(
      cacheResults({
        [search]: data[1],
      })
    );
  };

  const fetchSearchResults = async (suggestion) => {
    const res = await fetch(YT_SEARCH_VIDEOS_API + suggestion);
    const data = await res.json();
    dispatch(setQueriedVideos(data.items));
  };

  const onSuggestionClick = (suggestion) => {
    fetchSearchResults(suggestion);
    setSearch(suggestion);
    setShowSuggestions(false);
    //console.log("onSuggestionclick called");
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
            value={search}
            type="text"
            className="border border-gray-300 rounded-l-full px-4 py-1 w-80"
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <div
            onClick={() => fetchSearchResults(search)}
            className="p-1 px-3 border-2 border-gray-300 bg-gray-300 hover:bg-gray-400 hover:border-gray-400 rounded-r-full cursor-pointer"
          >
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
                  onMouseDown={() => onSuggestionClick(suggestion)}
                  className="text-sm cursor-pointer text-gray-500 p-2 hover:bg-gray-100 rounded-lg flex items-center"
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
