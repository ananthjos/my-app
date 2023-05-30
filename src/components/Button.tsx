import React from "react";

const Button = ({ text, buttonAction }) => {
  const handleClick = () => {
    buttonAction();
  };

  return (
    <button type='button' onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
