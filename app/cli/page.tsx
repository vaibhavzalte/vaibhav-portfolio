"use client";

import { useState } from "react";
import Tilt from "react-parallax-tilt";

export default function CLIPage() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  const handleCommand = (cmd: string) => {
    let output = "";
    switch (cmd.toLowerCase()) {
      case "help":
        output = "Available commands: about, projects, clear, help";
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
    setHistory((prev) => [...prev, `$ ${cmd}`, output]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input.trim());
    setInput("");
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-6 flex flex-col md:flex-row gap-8">
      {/* Left Side - 3D Interactive ID Card */}
      <div className="flex-1 flex justify-center items-start">
        <Tilt
          glareEnable={true}
          glareColor="rgba(255,255,255,0.2)"
          glareMaxOpacity={0.5}
          scale={1.05}
          transitionSpeed={2500}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          className="w-80 h-96"
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-2xl shadow-xl w-full h-full p-6 flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <img
                src="https://avatars.githubusercontent.com/u/000000?v=4" // <-- Replace with your image
                alt="Vaibhav"
                className="w-24 h-24 rounded-full border-4 border-green-400 shadow-lg"
              />
              <h2 className="mt-4 text-2xl font-bold">Vaibhav</h2>
              <p className="text-sm text-gray-300">Full-Stack Developer</p>
            </div>
            <div className="space-y-2 text-sm">
              <p>💻 React / Next.js / React Native</p>
              <p>⚙️ Spring Boot / PostgreSQL / DynamoDB</p>
              <p>☁️ AWS / GCP</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-400">vaibhav.dev | @github</p>
            </div>
          </div>
        </Tilt>
      </div>

      {/* Right Side - CLI */}
      <div className="flex-[2]">
        <h1 className="text-xl mb-4">CLI Mode - Vaibhav Portfolio</h1>
        <div className="space-y-2 bg-gray-950 p-4 rounded-lg h-[400px] overflow-y-auto">
          {history.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="mt-4 flex">
          <span className="mr-2">$</span>
          <input
            className="flex-1 bg-transparent border-none outline-none text-green-400"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          />
        </form>
      </div>
    </div>
  );
}
