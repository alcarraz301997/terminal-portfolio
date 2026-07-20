import { useEffect, useState } from "react";

type CommandProps = {
  command: string;
  speed?: number;
};

export default function Command({ command, speed = 40 }: CommandProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < command.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + command.charAt(index));
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    }
  }, [index, command, speed]);

  return (
    <p className="command-typing" aria-live="polite">
      <span className="command-user">junior-alcarraz@portfolio</span>
      <span className="command-separator">:</span>
      <span className="command-path">~</span>
      <span className="command-typed">{displayedText}</span>
      <span className="command-cursor cursor">█</span>
    </p>
  );
}
