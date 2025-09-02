"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";

export default function Header() {
  const pathname = usePathname();
  const isCli = pathname === "/cli";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isCli
          ? "bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-blue-500/20 backdrop-blur-lg"
          : "bg-white/70 dark:bg-gray-900/70 backdrop-blur-md"
      } border-b border-white/20 dark:border-gray-700/50 shadow-lg`}
    >
      {/* ✅ Desktop Navbar */}
      <NavBody className="px-6 py-3">
        {/* Logo */}
        <Link
          href="/"
          className={`font-extrabold text-2xl tracking-tight relative group ${
            isCli ? "text-emerald-400" : "text-gray-900 dark:text-white"
          }`}
        >
          Vaibhav Zalte
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Buttons */}
        <div className="flex gap-4 items-center">
          <Button asChild className="rounded-xl px-5 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
            <Link href="/">UI Mode</Link>
          </Button>
          <Button asChild className="rounded-xl px-5 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
            <Link href="/cli">CLI Mode</Link>
          </Button>
          <Button asChild className="rounded-xl px-5 py-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white">
            <Link href="/ask-ai">Ask AI</Link>
          </Button>

          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>
      </NavBody>

      {/* ✅ Mobile Navbar */}
      <MobileNav className="px-4 py-3 ">
        <MobileNavHeader>
          {/* Logo */}
          <Link
            href="/"
            className={`font-extrabold text-xl ${
              isCli ? "text-emerald-400" : "text-gray-900 dark:text-white"
            }`}
          >
            Vaibhav Zalte
          </Link>

          {/* Toggle Button */}
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </MobileNavHeader>

        {/* Mobile Menu */}
        <MobileNavMenu  isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Link
            href="/"
            className="w-full text-lg font-medium px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            UI Mode
          </Link>
          <Link
            href="/cli"
            className="w-full text-lg font-medium px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            CLI Mode
          </Link>
          <Link
            href="/ask-ai"
            className="w-full text-lg font-medium px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Ask AI
          </Link>

          <div className="mt-4">
            <ThemeToggle />
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
