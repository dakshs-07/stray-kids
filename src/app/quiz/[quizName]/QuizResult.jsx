import React from 'react'

function QuizResult({quiz, answers, score, onRestart}) {
    const percentage = Math.round((score/quiz.questions.length)*100);
    
  return (

    <div>QuizResult</div>
  )
}

export default QuizResult