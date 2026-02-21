import { notFound } from "next/navigation";
import QuizClient from "./QuizClient";
import clientPromise from "../../../lib/mongodb";
import QuizRecommendations from "./QuizRecommendations";

export default async function QuizPage({ params }) {
  const { quizName } = await params;

  const client = await clientPromise;
  const db = client.db("quizApp");

  const quiz = await db.collection("quizzes").findOne({ slug: quizName });

  if (!quiz) return notFound();
  quiz._id = quiz._id.toString();

  return (
    <>
      <QuizClient quiz={quiz} />
    <QuizRecommendations />
    </>
  );
}
