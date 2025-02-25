import { useEffect, useState } from "react";

type CountDownProps = {
  timer: number;
};

const CountDownTimer = ({ timer }: CountDownProps) => {
  const [time, setTime] = useState(timer * 60);
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 1) clearInterval(timerId);
        return prevTime > 0 ? prevTime - 1 : 0;
      });
    }, 1000);
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return (
    <span>
      {minutes <= 9 ? `0${minutes}` : minutes} :
      {seconds <= 9 ? `0${seconds}` : seconds}
    </span>
  );
};
export default CountDownTimer;
