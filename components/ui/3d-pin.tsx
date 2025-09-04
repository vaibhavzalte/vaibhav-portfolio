"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <Link
      href={href || "/"}
      className={cn("relative group/pin z-50 cursor-pointer", containerClassName)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{ transform }}
          className={cn(
            "absolute p-0.5 left-1/2 top-1/2 flex justify-start items-start rounded-2xl",
            "shadow-[0_8px_16px_rgb(0_0_0/0.4)]",
            // ✅ Use theme tokens instead of hard-coded dark/light
            " border-border dark:bg-white transition duration-700 overflow-hidden",
            "group-hover/pin:border-foreground/30"
          )}
        >
          <div className={cn("relative z-50", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} />
    </Link>
  );
};

export const PinPerspective = ({ title }: { title?: string }) => {
  return (
    <motion.div className="pointer-events-none w-22 h-20 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0 ">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-transparent py-0.5 px-4 ring-2 ring-border/20">
            <span className="relative z-20 text-foreground text-xs font-bold inline-block py-0.5">
              {title}
            </span>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] 
              bg-gradient-to-r from-primary/0 via-primary/80 to-primary/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </div>
        </div>

        {/* glowing effects */}
        <div
          style={{ perspective: "1000px", transform: "rotateX(70deg) translateZ(0)" }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          {[0, 2, 4].map((delay) => (
            <motion.div
              key={delay}
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: [0, 1, 0.5, 0], scale: 1, z: 0 }}
              transition={{ duration: 6, repeat: Infinity, delay }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-full bg-primary/10 shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            />
          ))}
        </div>

        {/* cyan line glow */}
        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-primary translate-y-[14px] w-px h-10 group-hover/pin:h-10 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-primary translate-y-[14px] w-px h-10 group-hover/pin:h-10" />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-primary translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-primary/70 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
        </>
      </div>
    </motion.div>
  );
};
