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
    <div className="flex items-center my-4 mx-8 gap-4">
      <IoIosArrowDropleft
        className="w-5 h-5 text-gray-500 cursor-pointer"
        onClick={() => handleScroll("left")}
      />
      <div
        className="flex flex-nowrap gap-4 overflow-hidden max-w-6xl scroll-smooth"
        ref={ref}
      >
        {btns.map((btn, index) => {
          return <Button key={index} btnName={btn} />;
        })}
      </div>
      <IoIosArrowDropright
        className="w-5 h-5 text-gray-500 cursor-pointer"
        onClick={() => handleScroll("right")}
      />
    </div>
  );
};

export default ButtonList;
