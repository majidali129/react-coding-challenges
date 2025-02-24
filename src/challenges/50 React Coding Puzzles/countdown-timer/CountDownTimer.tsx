import { useEffect, useState } from "react";

const start = 90;
const CountDownTimer = () => {
  const [timer, setTimer] = useState(start);
  const [response, setResponse] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  const submitQuiz = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Quiz submitted"), 1500);
    });
  };

  const handleTimerReset = () => {
    setTimer(start);
    setResponse("");
    setLoading(false);
  };

  useEffect(() => {
    console.log("Effect Runs");
    const timerId = setInterval(() => {
      setTimer((time) => {
        if (time === 1) {
          clearInterval(timerId);
        }

        return time > 0 ? time - 1 : 0;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [timer]);

  useEffect(() => {
    const handleQuizSubmit = async () => {
      setLoading(true);
      const res = await submitQuiz();
      setResponse(res as string);

      setLoading(false);
    };
    if (timer === 0) handleQuizSubmit();
  }, [timer]);
  const minutes = Math.floor(timer / 60);
  const seconds = Math.floor(timer % 60);

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="border min-w-sm text-center space-y-2 bg-gray-900 py-10 rounded-md">
        <p className="text-2xl text-white">
          Timer: {minutes <= 9 ? `0${minutes}` : minutes} :{" "}
          {seconds <= 9 ? `0${seconds}` : seconds}
        </p>

        {loading && <p className="text-sm text-white/50">Loading...</p>}
        {response && !loading && (
          <p className="text-2xl text-green-500">{response}</p>
        )}
        <button
          onClick={handleTimerReset}
          className="bg-slate-300 text-lg py-1 px-4 rounded-full"
        >
          Reset Timer
        </button>
      </div>
    </div>
  );
};

export default CountDownTimer;
