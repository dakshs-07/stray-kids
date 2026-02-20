import React from "react";

function QuizResult({ quiz, answers, score, onRestart }) {
  const percentage = Math.round((score / quiz.questions.length) * 100);
  let message = "";

  if (percentage === 100) {
    message = "100% certified STAY. SKZ would be proud.";
  } else if (percentage > 80) {
    message = "Bang Chan would trust you with the aux. That says a LOT.";
  } else if (percentage > 60) {
    message = "Not quite God’s Menu level, but definitely Menu-worthy.";
  } else if (percentage > 40) {
    message = "You’re in your trainee era. It’s okay, we all start somewhere.";
  } else {
    message = "Try again, STAY.";
  }
  return (
    <div className="flex flex-col items-center my-5">
      <div className=" flex flex-col items-center border bg-blue-100/30 max-w-2xl p-10">
        <h1 className="tracking-wide text-2xl">RESULTS</h1>
        <div className="flex max-w-xl justify-between gap-x-10 text-xl py-5">
          <p>
            Your score:{" "}<span className="text-blue-500 font-bold">{score}</span>
          </p>
          <p>
            Percentage:{" "}<span className="text-blue-500 font-bold">{percentage}%</span>
          </p>
        </div>
        <p className="font-extralight tracking-wide text-xl text-muted-foreground">{message}</p>
        <button onClick={()=>onRestart()} className="p-3 border my-10 cursor-pointer hover:bg-blue-800/50 hover:text-white">Restart</button>
      </div>
    </div>
  );
}

export default QuizResult;
