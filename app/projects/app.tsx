import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

const projects = [
  {
    title: "Airline Invoice System",
    description: "Bulk invoice creation, validation, and airline data handling.",
    url: "/projects/airline",
  },
  {
    title: "Cab Booking App",
    description: "React Native app for booking cabs with real-time updates.",
    url: "/projects/cab",
  },
  {
    title: "Auditing Service",
    description: "Spring Boot auditing service with Swagger and PostgreSQL.",
    url: "/projects/auditing",
  },
];

export default function ProjectsPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">My Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj) => (
          <Card key={proj.title} className="shadow-lg hover:shadow-xl transition">
            <CardHeader>
              <CardTitle>{proj.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-sm text-muted-foreground">{proj.description}</p>
              <Link
                href={proj.url}
                className="text-blue-500 hover:underline text-sm"
              >
                View Project →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
