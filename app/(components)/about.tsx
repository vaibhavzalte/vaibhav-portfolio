"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ElectricBorder from '@/components/ElectricBorder'
import { PixelImage } from "@/components/magicui/pixel-image";
import {
    FaJava,
    FaReact,
    FaDocker,
    FaAws,
} from "react-icons/fa";
import { SiSpringboot, SiPostgresql } from "react-icons/si";

export default function AboutPage() {
    return (

        <div className="text-gray-100 flex items-center justify-center px-6 py-16">
            <ElectricBorder
                color="#7df9ff"
                speed={1}
                chaos={0.5}
                thickness={2}
                style={{ borderRadius: 16 }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-6xl w-full"
                >
                    <Card className="backdrop-blur-xl border border-gray-800 rounded-3xl shadow-2xl">
                        <CardContent className="p-10">
                            <div className="grid md:grid-cols-2 gap-10 items-center">
                                {/* Left Content */}
                                <div>
                                    <motion.h1
                                        initial={{ x: -50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.2, duration: 0.6 }}
                                        className="text-5xl font-extrabold text-white mb-4"
                                    >
                                        Hi, I’m <span className="text-indigo-400">Vaibhav</span> 👋
                                    </motion.h1>
                                    <p className="text-lg text-gray-300 leading-relaxed mb-5">
                                        A passionate <span className="font-semibold">Software Developer</span> with{" "}
                                        <span className="text-indigo-400">1 year of experience</span>.
                                        I specialize in building scalable backend systems using{" "}
                                        <span className="font-semibold">Java (Spring Boot), Microservices, and PostgreSQL</span>.
                                        I also explore <span className="font-semibold">DevOps</span> and create modern UIs with{" "}
                                        <span className="font-semibold">React & Next.js</span>.
                                    </p>

                                    <Separator className="my-5 bg-gray-700" />

                                    <h2 className="text-2xl font-semibold text-white mb-4">
                                        Tech Stack
                                    </h2>
                                    <div className="flex flex-wrap gap-3">
                                        <Badge className="flex items-center gap-2 px-3 py-1 text-sm">
                                            <SiSpringboot /> Spring Boot
                                        </Badge>
                                        <Badge className="flex items-center gap-2 px-3 py-1 text-sm">
                                            <SiSpringboot /> Microservices
                                        </Badge>
                                        <Badge className="flex items-center gap-2 px-3 py-1 text-sm">
                                            <SiPostgresql /> PostgreSQL
                                        </Badge>
                                        <Badge className="flex items-center gap-2 px-3 py-1 text-sm">
                                            <FaJava /> Java
                                        </Badge>
                                        <Badge className="flex items-center gap-2 px-3 py-1 text-sm">
                                            <FaReact /> React / Next.js
                                        </Badge>
                                        <Badge className="flex items-center gap-2 px-3 py-1 text-sm">
                                            <FaDocker /> Docker
                                        </Badge>
                                        <Badge className="flex items-center gap-2 px-3 py-1 text-sm">
                                            <FaAws /> AWS Basics
                                        </Badge>
                                    </div>
                                </div>

                                {/* Right Side - Profile Image */}
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.6 }}
                                    className="flex justify-center"
                                >
                                    <div className="relative group">
                                        <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-500"></div>
                                        <Image
                                            src="/photo_vaibhav.png"
                                            alt="Vaibhav"
                                            width={300}
                                            height={300}
                                            className="relative rounded-3xl shadow-2xl  border-gray-800"
                                        />
                                        {/* <PixelImage src="/photo_vaibhav.png" grid="4x6" /> */}
                                    </div>
                                </motion.div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </ElectricBorder>
        </div>
    );
}
