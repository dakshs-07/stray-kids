import React from "react";
import { Quizzes } from "../../../../data/quizData";
import { notFound } from "next/navigation";

function QuizPage() {
  const quiz = Quizzes.find((q) => q.slug === params.quizName);
  if (!quiz) return notFound();

  return (
    <div>
      <h1>{quiz.title}</h1>
      <p>{quiz.description}</p>
    </div>
  );
}

export default QuizPage;
