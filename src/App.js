import React, { useState, useEffect } from "react";
import Questions from "./component/Questions";

export default function App() {
  const [questions, setquestions] = useState([]);
  const [index, setindex] = useState(0);
  const [score, setscore] = useState(0);
  const [gameEnded, setgameEnded] = useState(false);
  const [showAnswer, setshowAnswer] = useState(false);

  //function handleclick
  const handleClick = (answer) => {
    //check for answer
    if (!showAnswer) {
      //prevent double answers
      if (answer === questions[index].correct_answer) {
        setscore(score + 1);
      }
    }

    //change the question

    //setindex(index + 1);
    //end the game after all questions
    if (index === questions.length - 1) {
      setgameEnded(true);
    }
    //setshowanswer for changing style of button
    setshowAnswer(true);
  };
  // for next queston
  const handlenext = () => {
    setindex(index + 1);
    setshowAnswer(false);
  };
  useEffect(() => {
    const getdata = async function () {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple"
      );
      const data = await response.json();

      return data;
    };
    getdata().then((data) => setquestions(data.results));
  }, []);

  const playagain = () => {
    if (gameEnded) {
      setgameEnded(false);
      setindex(0);
      setscore(0);
    }
  };

  // first checking if questions length is not 0 and then checking if gamended is true or false
  return gameEnded ? (
    <div>
      <h1 className="text-3xl text-white font-bold">{`Your score is ${score}`}</h1>
      <button
        className="ml-auto text-white  bg-purple-800  p-4 mt-6 shadow scale-50"
        onClick={playagain}
      >
        Play Again
      </button>
    </div>
  ) : questions.length > 0 ? (
    <div className="container ">
      <Questions
        data={questions[index]}
        handleClick={handleClick}
        showAnswer={showAnswer}
        handlenext={handlenext}
      />
    </div>
  ) : (
    <h1>loading</h1>
  );
}
