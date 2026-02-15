import { notFound } from "next/navigation";
import { Quizzes } from "../../../../data/quizData";

export default function QuizPage({ params }) {
  const quiz = Quizzes.find((q) => q.slug === params.quizName);
  if (!quiz) return notFound();
  console.log("params:", params);
  console.log("quizName:", params.quizName);
  console.log("quizzes:", Quizzes);

  return (
    <div>
      <h1>{quiz.title}</h1>
      <p>{quiz.description}</p>
    </div>
  );
}
