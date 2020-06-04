import React from "react";

export default function Button({
  answer,
  handleClick,
  showAnswer,
  correct_answer,
}) {
  const bgColor = showAnswer
    ? answer === correct_answer
      ? "bg-green-300"
      : "bg-red-300"
    : "bg-white";
  return (
    <button
      onClick={() => handleClick(answer)}
      className={`${bgColor} w-auto bg-white text-purple-800 p-4 `}
    >
      {answer}
    </button>
  );
}
