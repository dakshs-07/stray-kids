import { notFound } from "next/navigation";
import { Quizzes } from "../../../../data/quizData";
import Image from "next/image";

export default async function QuizPage({ params }) {
  const resolvedParams = await params;
  const quiz = Quizzes.find((q) => q.slug === resolvedParams.quizName);
  if (!quiz) return notFound();

  return (
    <div>
        <Image src={quiz.image} alt={quiz.title} width={100} height={100} />
        <h1>{quiz.title}</h1>
        <p>{quiz.description}</p>
    </div>
  );
}
