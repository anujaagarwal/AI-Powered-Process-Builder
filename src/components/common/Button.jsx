import React from "react";

const Button = ({ text, onClick, ...rest }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
