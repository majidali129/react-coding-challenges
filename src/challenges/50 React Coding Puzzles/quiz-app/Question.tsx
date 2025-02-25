import { useEffect, useState } from "react";

interface QuestionProps {
  question: {
    id: number;
    question: string;
    options: Array<string>;
    correctAnswer?: number;
  };
  onAnswerSelect: (qIndex: number, answer: number) => void;
}

const Question = ({
  question: { question, options, id },
  onAnswerSelect,
}: QuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionSelection = (answer: number) => {
    setSelectedOption(answer);
    onAnswerSelect(id, answer);
  };

  useEffect(() => setSelectedOption(null), [id]);
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <form className="space-y-4" key={id}>
        {options.map((option, index) => (
          <label
            key={option}
            className={`flex items-center p-3 ${
              selectedOption === index
                ? "bg-stone-400/30 skew-[.3deg]"
                : "bg-stone-950"
            } rounded-lg focus-within:scale-3d focus-within:scale-[1.02]  cursor-pointer hover:bg-zinc-700 transition-colors`}
          >
            <input
              type="radio"
              name="answer"
              checked={selectedOption === index}
              value={option}
              onChange={() => handleOptionSelection(index)}
              className="form-radio  text-blue-500 focus:ring-blue-500 mr-3"
            />
            <span>{option}</span>
          </label>
        ))}
      </form>
    </>
  );
};
export default Question;
