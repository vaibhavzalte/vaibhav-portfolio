"use client";
import { useState, useRef, useEffect } from "react";

export default function CMD() {
  const [input, setInput] = useState("");
  const commands = ["welcome", "help", "about", "projects", "skills", "experience", "contact", "education", "certifications", "leadership", "sudo", "clear"];
  const [history, setHistory] = useState<{ cmd: string; output: string }[]>([
    {
      cmd: "welcome",
      output: "Welcome to Vaibhav's Portfolio! ✨\nFor any details type 'help'.",
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const containerRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  const handleCommand = (cmd: string) => {
    let output = "";
    switch (cmd.toLowerCase()) {
      case "welcome":
        output =
          "Welcome to Vaibhav's Portfolio! ✨\nFor any details type 'help'.";
        break;
      case "help":
        output = "Available commands:\n- about\n- projects\n- clear\n- help";
        break;
      case "about":
        output =
          "Vaibhav is a passionate software developer skilled in React, Next.js, Spring Boot, and Cloud ☁️";
        break;
      case "projects":
        output =
          "Projects:\n1. Airline Invoice System (/projects/airline)\n2. Cab Booking App (/projects/cab)";
        break;
      case "clear":
        setHistory([]);
        return;
      default:
        output = `Unknown command: ${cmd}. Type 'help' for options.`;
    }

    setHistory((prev) => [...prev, { cmd, output }]);
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input.trim());
    setInput("");
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const newIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const newIndex =
        historyIndex === commandHistory.length - 1 ? -1 : historyIndex + 1;
      setHistoryIndex(newIndex);
      setInput(newIndex === -1 ? "" : commandHistory[newIndex]);
    }
  };

  return (
    <div
      ref={containerRef}
      className="
        h-[650px] flex-[2] font-mono p-4 overflow-y-auto border 
        bg-white text-gray-800 border-gray-300
        dark:bg-black dark:text-green-400 dark:border-green-500
        [scrollbar-color:#22c55e_black] [scrollbar-width:thin]
      "
    >
      <div className="border-b pb-2 mb-2 font-mono 
        border-gray-300 text-gray-700 
        dark:border-green-400 dark:text-green-400">
        {commands.join(" | ")}
      </div>

      {history.map((line, i) => (
        <div key={i} className="mt-3">
          {line.cmd && (
            <div>
              <span className="text-blue-600 dark:text-blue-400">
                vaibhav@portfolio:~${" "}
              </span>
              <span className="text-gray-800 dark:text-green-400">
                {line.cmd}
              </span>
            </div>
          )}
          {line.output && (
            <div className="whitespace-pre-wrap ml-1 text-gray-700 dark:text-white">
              {line.output}
            </div>
          )}
        </div>
      ))}

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="flex font-mono mt-3 text-gray-800 dark:text-green-400"
      >
        <span className="mr-2 text-blue-600 dark:text-blue-400">
          vaibhav@portfolio:~$
        </span>
        <input
          className="flex-1 bg-transparent border-none outline-none overflow-hidden text-gray-800 dark:text-green-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </form>

      <div ref={endRef} />
    </div>
  );
}
