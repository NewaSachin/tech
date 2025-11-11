import { useState, useEffect } from "react";

const TypingText = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval); // cleanup
  }, [text, speed]);

  return (
    <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-1">
      {displayedText}
    </h1>
  );
};

export default TypingText;
