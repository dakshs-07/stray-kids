import Image from "next/image";
import { getRandomQuizzesFromDB } from "../../../lib/getRandomQuizzes";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

export default async function QuizRecommendations() {
  const quizzes = await getRandomQuizzesFromDB();
  return (
    <div className="mt-10">
      <h3 className="mb-4">
        <span className="bg-muted-foreground text-white px-1 my-2">
          TRY MORE QUIZZES
        </span>
      </h3>
      <div className="grid grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <Link
            key={quiz._id}
            href={`/quiz/${quiz.slug}`}
            className="group overflow-hidden"
          >
            <div className="relative w-full h-40">
              <Image
                src={quiz.image}
                alt={quiz.title}
                fill
                className="object-cover aspect-video"
              />
            </div>
            <div className="mt-3">
              <h4 className="text font-semibold line-clamp-1">{quiz.title}</h4>
              <p className="text-xs text-muted-foreground line-clamp-1 mt-1">
                {quiz.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <Link href="/quiz">
        <div className="flex items-center justify-end pt-5">
          <p className="underline hover:text-muted-foreground">Explore All Quizzes</p>
          <IoIosArrowRoundForward size={25} />
        </div>
      </Link>
    </div>
  );
}
