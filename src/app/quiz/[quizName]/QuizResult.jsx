import { useEffect, useState } from "react";

function QuizResult({ quiz, score, onRestart }) {
  const [stats, setStats] = useState(null);
  useEffect(() => {
    async function handleResults() {
      await fetch("/api/quizzes/quiz-result", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          quizSlug: quiz.slug,
          score,
          total: quiz.questions.length,
        }),
      });

      const res = await fetch(`/api/quizzes/quiz-stats/${quiz.slug}`);
      const data = await res.json();
      setStats(data);
    }
    handleResults();
  }, [quiz.slug, score]);
  let message = "";
  const percentage = Math.round((score / quiz.questions.length) * 100);
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
            Your score: <span className="text-blue-500 font-bold dark:text-green-400">{score}</span>
          </p>
          <p>
            Percentage:{" "}
            <span className="text-blue-500 font-bold dark:text-green-400">{percentage}%</span>
          </p>
        </div>
        <p className="font-extralight tracking-wide text-xl text-muted-foreground dark:text-gray-100">
          {message}
        </p>
        <div className="mt-10">
          <h2 className="text-xl pb-3 tracking-wide text-center">
            LEADERBOARD
          </h2>

          {stats === null ? (
            <p>Loading Leaderboard..</p>
          ) : stats.length === 0 ? (
            <p>You are the first one to take this quiz!</p>
          ) : (
            stats.map((item) => { 
              const itemPercentage = Math.round(
                (item._id / quiz.questions.length) * 100,
              );

              return (
                <div key={item._id} className="flex justify-between">
                  <span className="text-blue-700 font-semibold dark:text-blue-200">{itemPercentage}%</span>
                  <span className="text-purple-700 dark:text-purple-200">{item.count} STAYs</span>
                </div>
              );
            })
          )}
        </div>
        <button
          onClick={() => onRestart()}
          className="p-3 border mt-10 cursor-pointer hover:bg-blue-800/50 hover:text-white dark:border-white dark:hover:bg-blue-300 dark:hover:text-black"
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default QuizResult;
