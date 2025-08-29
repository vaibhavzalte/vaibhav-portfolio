"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b shadow-sm">
      <Link href="/" className="text-xl font-stretch-semi-condensed">Vaibhav Portfolio</Link>
      <div className="flex gap-3 items-center">
        <Link href="/"><Button variant="outline">UI Mode</Button></Link>
        <Link href="/cli"><Button variant="outline">CLI Mode</Button></Link>
        <Link href="/ask-ai"><Button variant="outline">Ask AI</Button></Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
