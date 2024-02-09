import React, { useRef, useState } from "react";
import Button from "./Button";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const ButtonList = () => {
  const btns = [
    "All",
    "Sports",
    "Music",
    "Mixes",
    "Trending",
    "Computer Science",
    "Gaming",
    "Software Development",
    "Politics",
    "Finance",
    "World",
    "History",
    "Science",
    "Engineering",
    "Comedy",
    "Economics",
  ];

  const ref = useRef(null);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const container = ref.current;
    const scrollAmount = 200;
    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
      setScrollPosition(container.scrollLeft);
    } else if (direction === "right") {
      container.scrollLeft += scrollAmount;
      setScrollPosition(container.scrollLeft);
    }
  };

  return (
    <div className="flex items-center my-4 md:px-8 px-2 md:gap-4 gap-2 w-full overflow-clip">
      <IoIosArrowDropleft
        className="md:w-5 md:flex hidden md:h-5 text-gray-500 cursor-pointer"
        onClick={() => handleScroll("left")}
      />
      <div
        className="flex flex-nowrap md:gap-4 gap-2 overflow-scroll no-scrollbar md:max-w-6xl w-full max-w-screen-sm scroll-smooth"
        ref={ref}
      >
        {btns.map((btn, index) => {
          return <Button key={index} btnName={btn} />;
        })}
      </div>
      <IoIosArrowDropright
        className="md:w-5 md:h-5 hidden md:flex text-gray-500 cursor-pointer"
        onClick={() => handleScroll("right")}
      />
    </div>
  );
};

export default ButtonList;
