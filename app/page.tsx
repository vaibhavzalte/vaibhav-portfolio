"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Timeline } from "../components/ui/timeline";
import { BarChart3, Calendar } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Dashboard() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className=" bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 ">
        {/* Hero Section */}
        <section className="text-center py-16 ">
          <h1 className="text-5xl font-extrabold mb-4">Hi, I’m Vaibhav 👋</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Full-Stack Developer specializing in building scalable web & mobile
            apps with modern technologies.
          </p>

          {/* Inline Hero Buttons */}
          <div className="mt-6 flex justify-center gap-4">
            <Button>📄 Download Resume</Button>
            <Button variant="outline">💼 Contact Me</Button>
          </div>
        </section>

        {/* Portfolio Tabs */}
        <section className="w-7xl pb-16  mx-auto">
          <Tabs defaultValue="projects" className="w-full">
            {/* Inline Tabs List */}
            <TabsList className="flex justify-center gap-2 bg-transparent">
              {["projects", "skills", "ai", "education"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="group flex items-center gap-2 px-5 py-2  rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 transition-all border border-gray-200 dark:border-gray-700 hover:border-purple-400 hover:text-purple-500 data-[state=active]:bg-purple-500 data-[state=active]:text-white"
                >
                  {/* Radio style circle */}
                  <span className="w-3.5 h-3.5 rounded-full border-2 border-gray-400 group-hover:border-purple-500 transition-colors flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-transparent group-data-[state=active]:bg-white"></span>
                  </span>
                  {tab === "projects" && "Projects"}
                  {tab === "skills" && "Skills"}
                  {tab === "ai" && "Ask AI"}
                  {tab === "education" && "Education"}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Projects Tab */}
            <TabsContent value="projects">
              <Timeline
                items={[
                  {
                    title: "Portfolio Website",
                    badges: ["Spring Boot", "PostgreSQL", "AWS", "GCP"],
                    description:
                      "Built with Next.js, TypeScript, TailwindCSS, and Shadcn UI.",
                    action: (
                      <div className="flex gap-3">
                        <Button size="sm">View Project</Button>
                        <Button size="sm" variant="outline">
                          Source Code
                        </Button>
                      </div>
                    ),
                  },
                  {
                    title: "Backend API",
                    badges: ["Spring Boot"],
                    description:
                      "REST API with PostgreSQL & DynamoDB, deployed on AWS & GCP.",
                    action: (
                      <div className="flex gap-3">
                        <Button size="sm">View API</Button>
                        <Button size="sm" variant="outline">
                          Docs
                        </Button>
                      </div>
                    ),
                  },
                  {
                    title: "Mobile App",
                    badges: ["React Native"],
                    description:
                      "Cross-platform booking app with modern UI and API integration.",
                    action: (
                      <div className="flex gap-3">
                        <Button size="sm">View App</Button>
                        <Button size="sm" variant="outline">
                          GitHub
                        </Button>
                      </div>
                    ),
                  },
                ]}
              />
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills">
              <Timeline
                items={[
                  {
                    title: "Frontend",
                    description: (
                      <>
                        <p>✅ React / Next.js / React Native</p>
                        <p>✅ TypeScript / TailwindCSS</p>
                        <p>✅ Shadcn UI</p>
                      </>
                    ),
                  },
                  {
                    title: "Backend",
                    description: (
                      <>
                        <p>✅ Spring Boot / Node.js</p>
                        <p>✅ PostgreSQL / DynamoDB</p>
                        <p>✅ REST / GraphQL APIs</p>
                      </>
                    ),
                  },
                  {
                    title: "Cloud & DevOps",
                    description: (
                      <>
                        <p>✅ AWS / GCP</p>
                        <p>✅ Docker / Kubernetes</p>
                        <p>✅ CI/CD Pipelines</p>
                      </>
                    ),
                  },
                ]}
              />
            </TabsContent>
            <TabsContent value="education">
              <Timeline
                items={[
                  {
                    title: "M.Sc. Computer Science",
                    badges: ["PUCSD"],
                    description: (
                      <div className="relative bg-white/60 dark:bg-gray-900/60 p-4 rounded-xl shadow-md">
                        {/* Year - top right */}
                        <span className="absolute top-0 right-4 flex items-center gap-1 text-sm font-medium text-purple-600 dark:text-purple-400">
                          <Calendar className="w-4 h-4" />
                          2022 – 2024
                        </span>

                        {/* University */}
                        <p className="flex items-center gap-2 font-medium mb-2 text-bold text-2xl">
                          🏛️Pune University – Computer Science Department (PUCSD)
                        </p>

                        {/* Score */}
                        <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                          <BarChart3 className="ml-1 w-5 h-5 text-green-600" />
                          CGPA: <span className="font-semibold">7.3</span>
                        </p>
                      </div>
                    ),
                  },
                  {
                    title: "B.Sc. Computer Science",
                    description: (
                      <div className="relative bg-white/60 dark:bg-gray-900/60 p-4 rounded-xl shadow-md">
                        {/* Year - top right */}
                        <span className="absolute top-0 right-4 flex items-center gap-1 text-sm font-medium text-purple-600 dark:text-purple-400">
                          <Calendar className="w-4 h-4" />
                          2019 – 2022
                        </span>

                        {/* University */}
                        <p className="flex items-center gap-2 font-medium mb-2 text-bold text-2xl">
                          🏛️N.V.P. College Lasalgaon
                        </p>

                        {/* Score */}
                        <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                          <BarChart3 className="ml-1 w-5 h-5 text-green-600" />
                          CGPA: <span className="font-semibold">9.31</span>
                        </p>
                      </div>
                    ),
                  },
                  {
                    title: "HSC",
                    description: (
                      <div className="relative bg-white/60 dark:bg-gray-900/60 p-4 rounded-xl shadow-md">
                        {/* Year - top right */}
                        <span className="absolute top-0 right-4 flex items-center gap-1 text-sm font-medium text-purple-600 dark:text-purple-400">
                          <Calendar className="w-4 h-4" />
                          2017 – 2019
                        </span>

                        {/* University */}
                        <p className="flex items-center gap-2 font-medium mb-2 text-bold text-2xl">
                          🏛️S.S.G.M. college kopargaon
                        </p>

                        {/* Score */}
                        <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                          <BarChart3 className="ml-1 w-5 h-5 text-green-600" />
                          Percentage: <span className="font-semibold">61.38%</span>
                        </p>
                      </div>
                    ),
                  },
                  {
                    title: "SSC",
                    description: (
                      <div className="relative bg-white/60 dark:bg-gray-900/60 p-4 rounded-xl shadow-md">
                        {/* Year - top right */}
                        <span className="absolute top-0 right-4 flex items-center gap-1 text-sm font-medium text-purple-600 dark:text-purple-400">
                          <Calendar className="w-4 h-4" />
                          2012 - 2017
                        </span>

                        {/* University */}
                        <p className="flex items-center gap-2 font-medium mb-2 text-bold text-2xl">
                          🏛️Sant Dnyaneshwar Vidyalay Katarni, Katarni
                        </p>

                        {/* Score */}
                        <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                          <BarChart3 className="ml-1 w-5 h-5 text-green-600" />
                          Percentage: <span className="font-semibold">81.80%</span>
                        </p>
                      </div>
                    ),
                  },
                ]}
              />
            </TabsContent>

            {/* Ask AI Tab */}
            <TabsContent value="ai">
              <div className="mt-8 p-6 border rounded-xl shadow-sm bg-white/70 dark:bg-gray-900/60 backdrop-blur-md">
                <h3 className="text-xl font-bold mb-4">Ask AI Assistant</h3>
                <p className="mb-4">
                  Here you can integrate a free AI tool (like OpenAI API or
                  HuggingFace) to answer your queries.
                </p>

                {/* Inline Ask AI Buttons */}
                <div className="flex gap-3">
                  <Button>Start Chat</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <Footer />
    </div>
  );
}
