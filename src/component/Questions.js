import React from "react";
import Button from "./Button";

export default function Questions({
  handleClick,
  showAnswer,
  handlenext,
  data: { question, incorrect_answers, correct_answer },
}) {
  //combining all elements in one array
  const shuffledanswers = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <div className="flex flex-col">
      <div className="bg-white text-purple-800  p-10 shadow-2xl rounded-lg  ">
        <h1
          className="text-2xl"
          dangerouslySetInnerHTML={{ __html: question }}
        ></h1>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-8">
        {shuffledanswers.map((item, index) => (
          <Button
            handleClick={handleClick}
            //className={item === correct_answer ? "bg-pink-300" : ""}
            key={index}
            answer={item}
            showAnswer={showAnswer}
            correct_answer={correct_answer}
          />
        ))}
      </div>
      {showAnswer && (
        <button
          onClick={handlenext}
          className=" ml-auto text-white  bg-purple-800  p-4 mt-6 shadow"
        >
          Next Question
        </button>
      )}
    </div>
  );
}
