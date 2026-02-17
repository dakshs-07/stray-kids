import { notFound } from "next/navigation";
import { Quizzes } from "../../../../data/quizData";
import QuizClient from "./QuizClient";

export default async function QuizPage({ params }) {
  const useParams = await params;
  const quiz = Quizzes.find((q) => q.slug === useParams.quizName);
  if (!quiz) return notFound();
  return <QuizClient quiz ={quiz} />
}
