"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface TimelineItem {
  title: string;
  badge?: string;
  description: React.ReactNode;
  action?: React.ReactNode;
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative pl-10 mt-10">
      {/* Vertical gradient line */}
      <div className="absolute left-5 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full" />

      {items.map((item, i) => {
        const Wrapper = mounted ? motion.div : "div";

        return (
          <Wrapper
            key={item.title}
            initial={mounted ? { opacity: 0, y: 40, scale: 0.9 } : undefined}
            animate={mounted ? { opacity: 1, y: 0, scale: 1 } : undefined}
            transition={
              mounted
                ? { delay: i * 0.2, duration: 0.6, type: "spring" }
                : undefined
            }
            className="relative mb-14"
          >
            {/* Number circle */}
            <div className="absolute -left-[2.4rem] top-2 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg shadow-blue-500/40 group-hover:scale-110 transition-transform duration-300">
              {i + 1}
            </div>

            {/* Card content */}
            <div className="ml-2 p-5 rounded-2xl bg-white/70 dark:bg-gray-900/60 backdrop-blur-md shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                {item.title}
                {item.badge && (
                  <Badge
                    className={cn(
                      "ml-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
                    )}
                  >
                    {item.badge}
                  </Badge>
                )}
              </h3>

              <div className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.description}
              </div>

              {item.action && (
                <div className="mt-4 flex">{item.action}</div>
              )}
            </div>
          </Wrapper>
        );
      })}
    </div>
  );
}
