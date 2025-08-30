"use client";
import { useState, useEffect } from "react";

export default function FooterCMD() {
  const [dateTime, setDateTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setDateTime(now.toLocaleString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        flex justify-between items-center px-4 py-2 font-mono text-sm border-t
        bg-white text-gray-800 border-gray-300
        dark:bg-black dark:text-green-400 dark:border-green-500
      "
    >
      <span className="text-blue-600 dark:text-green-400">
        vaibhav@portfolio:~$
      </span>
      <span>{dateTime}</span>
    </div>
  );
}
