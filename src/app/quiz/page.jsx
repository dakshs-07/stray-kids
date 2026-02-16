import Link from "next/link";
import { Quizzes } from "../../../data/quizData";

function QuizHome() {
  return (
    <div>
      <h1>Quiz Trivia Zone</h1>
      {Quizzes.map((quiz) => (
        <div key={quiz.slug}>
          <h1>{quiz.title}</h1>
          <p>{quiz.description}</p>
        </div>
      ))}
    </div>
  );
}

export default QuizHome;
