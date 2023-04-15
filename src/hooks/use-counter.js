import { useState, useEffect } from "react";

const useCounter = (sign) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      switch (sign) {
        case "+":
          setCounter((prevCounter) => prevCounter + 1);
          break;

        case "-":
          setCounter((prevCounter) => prevCounter - 1);
          break;

        default:
          break;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [sign]);

  return counter;
};

export default useCounter;
