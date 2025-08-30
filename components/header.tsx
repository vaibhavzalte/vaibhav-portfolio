"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isCli = pathname === "/cli";

  return (
    <header className={`flex justify-between ${isCli ? "" : "bg-gray-900" } items-center p-2 border-b shadow-sm`}>
      <div>
        <Link
          href="/"
          className={`font-semibold text-3xl ${isCli ? "text-green-500" : "text-foreground"
            }`}
        >
          Vaibhav Zalte
        </Link>
        <div className="text-gray-400">Software Developer</div>
      </div>
      <div className="flex gap-3 items-center">
        <Link href="/">
          <Button variant="outline">UI Mode</Button>
        </Link>
        <Link href="/cli">
          <Button variant="outline">CLI Mode</Button>
        </Link>
        <Link href="/ask-ai">
          <Button variant="outline">Ask AI</Button>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
