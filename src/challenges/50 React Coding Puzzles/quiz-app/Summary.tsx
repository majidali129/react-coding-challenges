import { Recycle } from "lucide-react";
import { Result } from "./Quiz";

interface SummaryProps {
  result: Result;
  onQuizReset: () => void;
}

const Summary = ({ result, onQuizReset }: SummaryProps) => {
  return (
    <div className=" flex items-center justify-center">
      <div className="bg-zinc-900 rounded-lg p-8 shadow-lg w-2/3 space-y-5">
        <div className="flex justify-between items-center">
          <h3 className="text-xl text-zinc-200 font-semibold">Quiz Summary</h3>
          <span
            className={` py-1 px-5 rounded-full  text-zinc-200 text-sm ${
              result.status === "Pass" ? "bg-green-600/70" : "bg-red-600/70"
            }`}
          >
            {result.status}
          </span>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {result.result.map((question) => (
            <div
              key={question.questionId}
              className={`aspect-square text-zinc-200 flex items-center justify-center rounded-lg text-sm font-medium ${
                question.status === "Correct"
                  ? "bg-green-600"
                  : question.status === "Wrong"
                  ? "bg-red-600/80"
                  : "bg-gradient-to-r from-amber-200 via-red-300 to-orange-300"
              }`}
            >
              {question.status}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={onQuizReset}
            className="py-2 px-2.5 bg-amber-500 rounded hover:bg-amber-500/80 transition-colors flex items-center justify-center gap-2 text-zinc-950"
          >
            <Recycle className="w-5 h-5" />
            Restart Quiz
          </button>
        </div>
      </div>
    </div>
  );
};
export default Summary;
