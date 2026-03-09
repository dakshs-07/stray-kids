"use client";
import { useState } from "react";
import Image from "next/image";
import QuizResult from "./QuizResult";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function QuizClient({ quiz }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);
  const currentQuestion = quiz.questions[currentIndex];
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const score = answers.reduce((total, answer, i) => {
    return answer === quiz.questions[i]?.answer ? total + 1 : total;
  }, 0);
  function handleBack() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedOption(null);
    }
  }

  return (
    <div className="border border-gray-200 min-h-screen py-8 px-4">
      <div className="flex items-center">
        <IoIosArrowRoundBack size={25} />
        <Link
          href="/quiz"
          className="underline cursor-pointer hover:text-muted-foreground"
        >
          Back to quizzes
        </Link>
      </div>
      <Image
        src={quiz.image}
        alt={quiz.title}
        width={500}
        height={500}
        className="mb-2 max-w-2xl mx-auto"
      />
      <h1 className="text-xl text-center">{quiz.title}</h1>
      <p className="text-center text-muted-foreground">{quiz.description}</p>
      {currentIndex < quiz.questions.length ? (
        <>
          <div className="flex justify-around py-5 text-sm">
            <p>Score: {score}</p>
            <p>
              Question {currentIndex + 1} of {quiz.questions.length}
            </p>
          </div>
          <div
            className={`px-4 max-w-2xl mx-auto transition-opacity duration-700 ${isTransitioning ? "opacity-30" : "opacity-100"}`}
          >
            <h2 className="my-4 text-lg font-medium">
              {currentIndex + 1}. {currentQuestion.question}?
            </h2>
            <div className="flex flex-col gap-y-2">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (selectedOption !== null) return;
                    const updated = [...answers];
                    updated[currentIndex] = index;
                    setSelectedOption(index);
                    setAnswers(updated);
                    setTimeout(() => {
                      setShowAnswer(true);
                    }, 200);
                    setTimeout(() => {
                      setIsTransitioning(true);
                    }, 700);
                    setTimeout(() => {
                      setCurrentIndex((prev) => prev + 1);
                      setSelectedOption(null);
                      setShowAnswer(false);
                      setIsTransitioning(false);
                    }, 1100);
                  }}
                  className={`block w-full py-3 px-4 border border-gray-400 text-gray-700 text-left transition hover:border-yellow-100/40 ${
                    showAnswer
                      ? index === currentQuestion.answer
                        ? "bg-green-200 border-green-500"
                        : selectedOption === index
                          ? "bg-red-200 border-red-500"
                          : "bg-white"
                      : "bg-white hover:bg-gray-50 border-gray-400"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="mt-5">
              <button
                onClick={handleBack}
                disabled={currentIndex === 0}
                className="underline cursor-pointer hover:text-muted-foreground"
              >
                Back
              </button>
            </div>
          </div>
        </>
      ) : (
        <QuizResult
          quiz={quiz}
          answers={answers}
          score={score}
          onRestart={() => {
            setCurrentIndex(0);
            setAnswers([]);
            setSelectedOption(null);
          }}
        />
      )}
    </div>
  );
}
