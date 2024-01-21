import React from "react";
import Button from "./Button";

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
  ];
  return (
    <div className="flex m-4 gap-4">
      {btns.map((btn, index) => {
        return <Button btnName={btn} />;
      })}
    </div>
  );
};

export default ButtonList;
