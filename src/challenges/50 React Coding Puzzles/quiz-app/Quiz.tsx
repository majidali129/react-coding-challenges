import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { quizData as quiz } from "../data";
import { IQuestion } from "../types";
import Header from "./Header";
import Question from "./Question";
import Report from "./Report";
import Summary from "./Summary";

type Answers = Record<number, number>;
export type Result = {
  result: {
    questionId: number;
    status: string;
    userAns: string;
  }[];
  score: number;
  status: string;
};

const validateAnswers = (answers: Answers, questions: IQuestion[]) => {
  let score = 0;
  const result = questions.map(({ id, correctOption, options }) => {
    const userAnswerIndex = answers[id];
    const isCorrect = userAnswerIndex === correctOption;

    if (isCorrect) score++;

    return {
      questionId: id,
      status: isCorrect ? "Correct" : "Wrong",
      userAns: options[userAnswerIndex] || "No Answer",
    };
  });
  const totalMarks = questions.length;
  const quizReport =
    Math.floor((score / totalMarks) * 100) > 65 ? "Pass" : "Fail";

  return { result, score, status: quizReport };
};

export default function QuizApp() {
  const questions = quiz.questions;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [result, setResult] = useState<Result | null>(null);
  const [isQuizEnd, setIsQuizEnd] = useState(false);

  const handleNextQuestion = () => {
    if (currentQuestion === questions.length - 1) return;
    setCurrentQuestion((prevQues) => prevQues + 1);
  };
  const handlePrevQuestion = () => {
    if (currentQuestion === 0) return;
    setCurrentQuestion((prevQues) => prevQues - 1);
  };

  const handleAnswerSelection = (qId: number, ans: number) => {
    setAnswers((prevAns) => ({ ...prevAns, [qId]: ans }));
  };

  const handleQuesSubmit = () => {
    const quizResult = validateAnswers(answers, questions);
    setResult(quizResult);
    setIsQuizEnd(true);
  };

  const handleRestartQuiz = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setResult(null);
    setIsQuizEnd(false);
  };

  const isLastQuestion = currentQuestion === questions.length - 1;
  const isFirstQuestion = currentQuestion === 0;
  return (
    <>
      {!isQuizEnd && (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 sm:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto">
            <Header
              totalQuestions={questions.length}
              currentQuestion={currentQuestion + 1}
              duration={parseInt(quiz.duration)}
              quizType={quiz.quizType}
              subject={quiz.subject}
            />

            <main className="bg-zinc-900 rounded-lg p-6 mb-8 shadow-lg">
              <Question
                question={questions[currentQuestion]}
                onAnswerSelect={handleAnswerSelection}
              />
            </main>

            <div className="flex justify-between items-center mb-8">
              <button
                disabled={isFirstQuestion}
                onClick={handlePrevQuestion}
                className="flex items-center gap-2 px-4 py-2 bg-amber-600 disabled:bg-amber-800/80 disabled:cursor-not-allowed rounded-lg hover:bg-amber-700 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>
              {!isLastQuestion && (
                <button
                  disabled={isLastQuestion}
                  onClick={handleNextQuestion}
                  className="flex items-center disabled:cursor-not-allowed disabled:bg-amber-600/80 gap-2 px-4 py-2 bg-amber-600 rounded-lg hover:bg-amber-700 transition-colors"
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}

              {isLastQuestion && (
                <button
                  onClick={handleQuesSubmit}
                  className="flex items-center disabled:cursor-not-allowed disabled:bg-amber-600/80 gap-2 px-4 py-2 bg-amber-600 rounded-lg hover:bg-amber-700 transition-colors"
                >
                  Submit
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {result && isQuizEnd && (
        <section className="space-y-8 py-5">
          <Summary result={result} onQuizReset={handleRestartQuiz} />
          <Report
            passingMarks={questions.length}
            totalQuestions={questions.length}
            score={result.score}
            subject={quiz.subject}
          />
        </section>
      )}
    </>
  );
}
