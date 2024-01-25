import React from "react";

const Button = ({ btnName }) => {
  return (
    <div className="py-1 px-4 bg-gray-300 rounded-xl hover:bg-gray-400 cursor-pointer font-semibold text-nowrap">
      {btnName}
    </div>
  );
};

export default Button;
