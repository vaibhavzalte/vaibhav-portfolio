"use client";

import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { dashboardData } from "../__data/data";
import { Send, User, Bot } from "lucide-react";

export default function AskAIPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Vaibhav's AI assistant. Ask me about his experience, projects, skills, or anything else!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Generate bot response
    const response = generateResponse(input.toLowerCase());

    // Add bot message after a short delay to simulate thinking
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: response,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 500);

    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const generateResponse = (question: string): string => {
    // ABOUT VAIBHAV
    if (question.includes("vaibhav") || question.includes("yourself") || question.includes("who are you")) {
      return `Vaibhav is a passionate Software Developer skilled in Java, Spring Boot, React.js, Next.js, and Cloud technologies ☁️. \n\nHe enjoys building scalable backend systems and modern frontend interfaces using TailwindCSS and React Hook Form. \n\nCurrently working at ${dashboardData.experience[0].companyName} as a ${dashboardData.experience[0].position}.`;
    }

    // EXPERIENCE
    else if (question.includes("experience") || question.includes("work")) {
      const exp = dashboardData.experience
        .map(
          (e) =>
            `• ${e.position} at ${e.companyName} (${e.duration})\nSkills: ${e.badges.join(", ")}`
        )
        .join("\n\n");
      return `Here's Vaibhav's professional experience:\n\n${exp}`;
    }

    // PROJECTS
    else if (question.includes("project")) {
      const projects = dashboardData.projects
        .map(
          (p) =>
            `• ${p.title} – ${p.description}\nTech: ${p.badges.join(", ")}`
        )
        .join("\n\n");
      return `Vaibhav has worked on these projects:\n\n${projects}`;
    }

    // SKILLS
    else if (question.includes("skill") || question.includes("tech") || question.includes("technology")) {
      const skills = dashboardData.skills
        .map(
          (s) => `• ${s.title}: ${s.description.join(", ")}`
        )
        .join("\n\n");
      return `Vaibhav's technical skills:\n\n${skills}`;
    }

    // EDUCATION
    else if (question.includes("education") || question.includes("study") || question.includes("college") || question.includes("university")) {
      const education = dashboardData.education
        .map(
          (e) =>
            `• ${e.title} from ${e.institute} (${e.year}) – ${e.result}`
        )
        .join("\n");
      return `Vaibhav's education:\n\n${education}`;
    }

    // ACHIEVEMENTS or CONTACT
    else if (question.includes("achievement") || question.includes("contact") || question.includes("reach")) {
      return "You can connect with Vaibhav on:\n\n• GitHub: https://github.com/vaibhavzalte\n• Email: vaibhavzalte@gmail.com ✉️\n\nFeel free to reach out!";
    }

    // DEFAULT
    else {
      return "I can tell you about Vaibhav's:\n\n• Skills & Technologies\n• Work Experience\n• Projects\n• Education\n• How to contact him\n\nTry asking: 'What projects has he worked on?' or 'Tell me about his skills' 🙂";
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto bg-background">
      {/* Header */}
      <div className="p-4 border-b bg-card">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-bold text-lg">Vaibhav&apos;s AI Assistant</h1>
            <p className="text-sm text-muted-foreground">Online</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            {message.sender === "bot" && (
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-primary-foreground" />
              </div>
            )}

            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2 ${message.sender === "user"
                ? "bg-primary text-primary-foreground rounded-br-md"
                : "bg-muted border rounded-bl-md"
                }`}
            >
              <div className="whitespace-pre-line">{message.text}</div>
              <div
                className={`text-xs mt-1 ${message.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
              >
                {formatTime(message.timestamp)}
              </div>
            </div>

            {message.sender === "user" && (
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t bg-card">
        <div className="flex gap-2">
          <Input
            placeholder="Ask about Vaibhav's experience, projects, skills..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1"
          />
          <Button
            onClick={handleSend}
            size="icon"
            disabled={!input.trim()}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground text-center mt-2">
          Ask about work experience, projects, education, or contact info
        </p>
      </div>
    </div>
  );
}