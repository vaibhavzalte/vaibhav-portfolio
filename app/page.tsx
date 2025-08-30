"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-2 border-green-400">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-extrabold mb-4">Hi, I’m Vaibhav 👋</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Full-Stack Developer specializing in building scalable web & mobile
          apps with modern technologies.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button>📄 Download Resume</Button>
          <Button variant="outline">💼 Contact Me</Button>
        </div>
      </section>

      {/* Portfolio Tabs */}
      <section className="px-8 pb-16">
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="flex justify-center">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="ai">Ask AI</TabsTrigger>
          </TabsList>

          {/* Projects Tab */}
          <TabsContent value="projects">
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card className="hover:shadow-lg transition rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    Portfolio Website <Badge>Next.js</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Built with Next.js, TypeScript, TailwindCSS, and Shadcn UI.
                  </p>
                  <Button className="mt-4">View Project</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    Backend API <Badge>Spring Boot</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    REST API with PostgreSQL & DynamoDB, deployed on AWS & GCP.
                  </p>
                  <Button className="mt-4">View Project</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    Mobile App <Badge>React Native</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Cross-platform booking app with modern UI and API
                    integration.
                  </p>
                  <Button className="mt-4">View Project</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills">
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>✅ React / Next.js / React Native</p>
                  <p>✅ TypeScript / TailwindCSS</p>
                  <p>✅ Shadcn UI</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Backend</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>✅ Spring Boot / Node.js</p>
                  <p>✅ PostgreSQL / DynamoDB</p>
                  <p>✅ REST / GraphQL APIs</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cloud & DevOps</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>✅ AWS / GCP</p>
                  <p>✅ Docker / Kubernetes</p>
                  <p>✅ CI/CD Pipelines</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Ask AI Tab */}
          <TabsContent value="ai">
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Ask AI Assistant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Here you can integrate a free AI tool (like OpenAI API or
                  HuggingFace) to answer your queries.
                </p>
                <Button>Start Chat</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}
