export const dashboardData = {
    tabs: [
        { id: "projects", label: "Projects" },
        { id: "skills", label: "Skills" },
        { id: "ai", label: "Ask AI" },
        { id: "education", label: "Education" },
    ],

    projects: [
        {
            title: "Portfolio Website",
            badges: ["Spring Boot", "PostgreSQL", "AWS", "GCP"],
            description: "Built with Next.js, TypeScript, TailwindCSS, and Shadcn UI.",
            actions: [
                { label: "View Project", variant: "default" as const },
                { label: "Source Code", variant: "outline" as const },
            ],
        },
        {
            title: "Backend API",
            badges: ["Spring Boot"],
            description:
                "REST API with PostgreSQL & DynamoDB, deployed on AWS & GCP.",
            actions: [
                { label: "View API", variant: "default" as const },
                { label: "Docs", variant: "outline" as const },
            ],
        },
    ],
    skills: [
        {
            title: "Frontend",
            description: [
                "✅ React / Next.js / React Native",
                "✅ TypeScript / TailwindCSS",
                "✅ Shadcn UI",
            ],
        },
        {
            title: "Backend",
            description: [
                "✅ Spring Boot / Node.js",
                "✅ PostgreSQL / DynamoDB",
                "✅ REST / GraphQL APIs",
            ],
        },
    ],
    education: [
        {
            title: "M.Sc. Computer Science",
            institute: "Pune University – PUCSD",
            year: "2022 – 2024",
            result: "CGPA: 7.3",
            type: "cgpa",
        },
        {
            title: "B.Sc. Computer Science",
            institute: "N.V.P. College Lasalgaon",
            year: "2019 – 2022",
            result: "CGPA: 9.31",
            type: "cgpa",
        },
        {
            title: "HSC",
            institute: "S.S.G.M. College Kopargaon",
            year: "2017 – 2019",
            result: "Percentage: 61.38%",
            type: "percentage",
        },
        {
            title: "SSC",
            institute: "Sant Dnyaneshwar Vidyalay Katarni, Katarni",
            year: "2012 – 2017",
            result: "Percentage: 81.80%",
            type: "percentage",
        },
    ],
};
