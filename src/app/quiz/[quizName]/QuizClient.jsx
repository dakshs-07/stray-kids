"use client";
import { useState } from "react";
import Image from "next/image";

export default function QuizClient({ quiz }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const currentQuestion = quiz.questions[currentIndex];

  function handleNext() {
    if (currentIndex < quiz.questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    }
  }
  function handleBack() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedOption(null);
    }
  }

  return (
    <div className="border border-gray-200 min-h-screen py-8 px-4">
      <Image
        src={quiz.image}
        alt={quiz.title}
        width={500}
        height={500}
        className="mb-2 mx-auto"
      />
      <h1 className="text-xl text-center">{quiz.title}</h1>
      <p className="text-center text-muted-foreground">{quiz.description}</p>
      <p className="text-sm text-center py-4">
        Question {currentIndex + 1} of {quiz.questions.length}
      </p>
      <div className="px-4 max-w-2xl mx-auto">
        <h2 className="my-4 text-lg font-medium">
          {currentIndex + 1}. {currentQuestion.question}?
        </h2>
        <div className="flex flex-col gap-y-2">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedOption(index)}
              className={`block w-full py-3 px-4 border border-gray-400 text-gray-700 text-left transition hover:bg-yellow-100/40 ${
                selectedOption === index
                  ? "text-black"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="mt-2">
          <button
            onClick={handleBack}
            disabled={currentIndex === 0}
            className="underline"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
