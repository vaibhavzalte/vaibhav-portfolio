"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AskAIPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = () => {
    if (!question.trim()) return;

    if (question.toLowerCase().includes("vaibhav")) {
      setAnswer("Vaibhav is a passionate software developer skilled in React, Next.js, Spring Boot, and Cloud ☁️");
    } else if (question.toLowerCase().includes("project")) {
      setAnswer(
        "Vaibhav’s projects: \n1. Airline Invoice System (/projects/airline)\n2. Cab Booking App (/projects/cab)\n3. Auditing Service (/projects/auditing)"
      );
    } else {
      setAnswer("Sorry, I can only tell you about Vaibhav and his projects 🙂");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Ask AI about Vaibhav</h1>
      <div className="flex gap-2">
        <Input
          placeholder="Ask me about Vaibhav or his projects..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <Button onClick={handleAsk}>Ask</Button>
      </div>
      {answer && (
        <div className="p-4 border rounded-md bg-muted whitespace-pre-line">
          {answer}
        </div>
      )}
    </div>
  );
}
