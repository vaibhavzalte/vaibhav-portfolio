"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AIChat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = () => {
    if (question.toLowerCase().includes("vaibhav")) {
      setAnswer("Vaibhav is a passionate software developer. Check his projects at /projects");
    } else if (question.toLowerCase().includes("project")) {
      setAnswer("Vaibhav’s projects: \n1. Airline Invoice System (/projects/airline)\n2. Cab Booking App (/projects/cab)");
    } else {
      setAnswer("Sorry, I only answer about Vaibhav and his projects 🙂");
    }
  };

  return (
    <div className="space-y-3">
      <Input
        placeholder="Ask AI about Vaibhav..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <Button onClick={handleAsk}>Ask</Button>
      {answer && <div className="p-3 border rounded-md bg-muted">{answer}</div>}
    </div>
  );
}
