import Link from "next/link";
import Image from "next/image";
import clientPromise from "../../lib/mongodb";

export default async function QuizHome() {
  const client = await clientPromise;
  const db = client.db("quizApp");

  const quizzes = await db.collection("quizzes").find({}, {projection: {questions: 0}}).toArray();
  return (
    <div>
      <h1 className="text-3xl tracking-wide text-center pb-10">
        Quiz Trivia Zone
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {quizzes.map((quiz) => (
          <div key={quiz.slug}>
            <Link href={`/quiz/${quiz.slug}`}>
              <Image
                src={quiz.image}
                alt={quiz.title}
                width={250}
                height={250}
              />
              <h1 className="text-xl">{quiz.title}</h1>
              <p className="text-muted-foreground text-sm">
                {quiz.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}