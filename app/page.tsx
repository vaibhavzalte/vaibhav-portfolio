"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Timeline } from "../components/ui/timeline";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { dashboardData } from "./__data/data";
import { BarChart3, Calendar } from "lucide-react";
import Hero from "./(components)/hero-section";
import { CoolMode } from "@/components/magicui/cool-mode";
import SplashCursor from '../components/SplashCursor'
import ContactPage from "./(components)/contact";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <SplashCursor />
      <Header />
      <main className="flex-1 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Hero Section */}
        <Hero />

        {/* Tabs */}
        <section className="max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 mx-auto">
          <Tabs defaultValue="projects" className="w-full">
            {/* Tabs List */}
            <TabsList
              className="w-full h-auto flex flex-wrap justify-center gap-7 bg-transparent"
            >
              {dashboardData.tabs.map((tab) => (
                <CoolMode key={tab.id}
                >
                  <TabsTrigger
                    value={tab.id}
                    className="group flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium 
                    text-gray-700 dark:text-gray-300 transition-all border border-gray-200 dark:border-gray-700 
                    hover:border-purple-400 hover:text-purple-500 
                    data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 
                    data-[state=active]:text-white shadow-sm"
                  >
                    {/* Radio Circle */}
                    <span
                      className="w-3.5 h-3.5 rounded-full border-2 border-gray-400 
                      transition-colors flex items-center justify-center
                      group-data-[state=active]:border-white"
                    >
                      <span
                        className="w-2 h-2 rounded-full bg-transparent 
                        group-data-[state=active]:bg-white"
                      ></span>
                    </span>
                    {tab.label}
                  </TabsTrigger>
                </CoolMode>
              ))}
            </TabsList>

            {/* Projects */}

            <TabsContent value="projects">
              <Timeline
                items={dashboardData.projects.map((p) => ({
                  title: p.title,
                  badges: p.badges,
                  description: p.description,
                  action: (
                    <div className="flex gap-3 flex-wrap">
                      {p.actions.map((a, i) => (
                        <a
                          key={i}
                          href={a?.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" variant={a.variant}>
                            {a.label}
                          </Button>
                        </a>
                      ))}
                    </div>
                  ),
                }))}
              />
            </TabsContent>

            <TabsContent value="experience">
              <Timeline
                items={dashboardData.experience.map((exp, i) => ({
                  title: `${exp.position} @  ${exp.companyName} `,
                  badges: exp.badges,
                  description: (
                    <>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                      >
                        {exp.companyName}
                      </a>{" "}
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        ({exp.duration})
                      </span>
                      <p className="mt-2">{exp.description}</p>
                    </>
                  ),
                  action: (
                    <div className="flex gap-3 flex-wrap">
                      {exp.actions.map((a, idx) => (
                        <a
                          key={idx}
                          href={a?.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button size="sm" variant={a.variant}>
                            {a.label}
                          </Button>
                        </a>
                      ))}
                    </div>
                  ),
                }))}
              />
            </TabsContent>


            {/* Skills */}
            <TabsContent value="skills">
              <Timeline
                items={dashboardData.skills.map((s) => ({
                  title: s.title,
                  description: (
                    <div>
                      {s.description.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  ),
                }))}
              />
            </TabsContent>

            {/* Education */}
            <TabsContent value="education">
              <Timeline
                items={dashboardData.education.map((edu) => ({
                  title: edu.title,
                  description: (
                    <div className="relative bg-white/60 dark:bg-gray-900/60 p-3 sm:p-4 rounded-xl shadow-md">
                      {/* Year top-right */}
                      <span className="absolute top-0 right-4 flex items-center gap-1 text-sm font-medium text-purple-600 dark:text-purple-400">
                        <Calendar className="w-4 h-4" /> {edu.year}
                      </span>

                      {/* Institute */}
                      <p className="font-bold text-lg sm:text-2xl mb-2">
                        🏛️ {edu.institute}
                      </p>

                      {/* Result */}
                      <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                        <BarChart3 className="w-5 h-5 text-green-600" />
                        {edu.result}
                      </p>
                    </div>
                  ),
                }))}
              />
            </TabsContent>

            {/* AI */}
            <TabsContent value="contact">
              <ContactPage/>
            </TabsContent>

            <TabsContent value="ai">
              <div className="p-4 border rounded-xl shadow-sm">
                <h3 className="font-bold mb-2">Ask AI Assistant</h3>
                <p className="mb-4">Integrate OpenAI or HuggingFace here.</p>
                <Button>Start Chat</Button>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <Footer />
    </div>
  );
}
