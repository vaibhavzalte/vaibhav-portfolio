"use client";

import { motion } from "framer-motion";
import { AuroraText } from "@/components/magicui/aurora-text";
import { PinContainer } from "@/components/ui/3d-pin";
import { Github, Linkedin, FileDown, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 text-foreground">
      {/* Background Shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-32 -right-24 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold drop-shadow-lg"
        >
          Hi, I’m{" "}
          <span className="text-primary">
            <AuroraText
              colors={["#00FFE0", "#FF00E0", "#7000FF", "#00C3FF"]}
              speed={2}
            >
              Vaibhav Zalte
            </AuroraText>{" "}
            👋
          </span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-lg sm:text-2xl text-muted-foreground max-w-2xl mx-auto"
        >
          Full-Stack Developer specializing in building scalable web & mobile
          apps with{" "}
          <span className="font-semibold text-accent-foreground">
            modern technologies
          </span>
          .
        </motion.p>

        {/* Social Links in PinContainers */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-0">
          <PinContainer title="GitHub" href="https://github.com/vaibhavzalte">
            <div className="flex flex-col items-center justify-center p-4 w-15 h-15 rounded-xl bg-gradient-to-br from-gray-900 via-gray-700 to-gray-600 hover:shadow-lg hover:shadow-gray-400/30 transition">
              <Github size={24} className="text-white " />
            </div>
          </PinContainer>

          <PinContainer
            title="LinkedIn"
            href="http://www.linkedin.com/in/vaibhavzalte"
          >
            <div className="flex flex-col items-center justify-center p-4 w-15 h-15 rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 hover:shadow-lg hover:shadow-blue-400/30 transition">
              <Linkedin size={24} className="text-white" />
            </div>
          </PinContainer>

          <PinContainer title="LeetCode" href="https://leetcode.com/vaibhav_zalte">
            <div className="flex flex-col items-center justify-center p-3 w-15 h-15 rounded-xl bg-gradient-to-br from-black via-gray-900 to-orange-500 hover:shadow-lg hover:shadow-orange-400/30 transition">
              <Terminal size={25} className="text-white" />
              <p className="text-xs text-orange-300 font-medium">LeetCode</p>
            </div>
          </PinContainer>

          <PinContainer title="Resume" href="/vaibhav_resume.pdf">
            <div className="flex flex-col items-center justify-center p-3 w-15 h-15 rounded-xl bg-gradient-to-br from-green-600 via-emerald-500 to-lime-400 hover:shadow-lg hover:shadow-green-400/30 transition">
              <FileDown size={25} className="text-white" />
              <p className="text-xs text-white font-medium">Resume</p>
            </div>
          </PinContainer>
        </div>
      </div>
    </section>
  );
}