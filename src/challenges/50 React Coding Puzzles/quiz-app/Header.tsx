import { Timer } from "lucide-react";
import CountDownTimer from "./CountDownTimer";

interface HeaderProps {
  quizType: string;
  subject: string;
  duration: number;
  currentQuestion: number;
  totalQuestions: number;
}

const Header = ({
  quizType,
  subject,
  duration,
  currentQuestion,
  totalQuestions,
}: HeaderProps) => {
  return (
    <header className="mb-8">
      <h1 className="text-3xl font-bold mb-2">{subject} Quiz</h1>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">
            {quizType}
          </span>
          <span className="flex items-center gap-2">
            <Timer className="w-5 h-5" />
            <CountDownTimer timer={duration} />
          </span>
        </div>
        <div className="text-right">
          <span>Duration: {duration} Mins</span>
          <p className="text-sm text-zinc-400">
            Question {currentQuestion} of {totalQuestions}
          </p>
          {/* <p className="text-lg font-semibold">Score: 2/10</p> */}
        </div>
      </div>
    </header>
  );
};
export default Header;
