export const dashboardData = {
    tabs: [
        { id: "projects", label: "Personal Projects" },
        { id: "experience", label: "Work Experience" },
        { id: "skills", label: "Skills" },
        { id: "education", label: "Education" },
        { id: "about", label: "About" },
        { id: "contact", label: "Contact" },
        { id: "achievements", label: "Achievements" },
        { id: "ai", label: "Ask AI" },
    ],

    projects: [
        {
            title: "Myntra Clone",
            badges: ["React.js", "Bootstrap", "Redux", "Toolkit"],
            description: "Developed a responsive e-commerce website clone of Myntra using React and Bootstrap. Integrated Redux Toolkit for state management to enable dynamic cart functionality and bill generation. Designed the interface to closely replicate the original platform, providing a smooth shopping experience.",
            actions: [
                { label: "View Project", variant: "default" as const, url: "https://github.com/vaibhavzalte/" },
                { label: "Source Code", variant: "outline" as const, url: "https://github.com/vaibhavzalte/" },
            ],
        },
        {
            title: "Personal Journal Application",
            badges: ["Java", "Spring Boot", "MongoDB", "Postman", "IntelliJ IDEA"],
            description:
                "Developed a journal application for documenting daily activities and managing to-do lists, with user authentication and authorization via Spring Security for secure access. Integrated Spring Boot with MongoDB for efficient data storage and used RESTful APIs to enhance user interaction, ensuring data consistency through Spring's transactional management.",
            actions: [
                { label: "View Project", variant: "default" as const, url: "https://github.com/vaibhavzalte/" },
                { label: "Source Code", variant: "outline" as const, url: "https://github.com/vaibhavzalte/" },
            ],
        },
        {
            title: "Driver Drowsiness Detection System",
            badges: ["Python", "CNN", "OpenCV", "Dlib", "Machine Learning"],
            description:
                "Developed a real-time driver drowsiness detection system using computer vision and deep learning techniques. Implemented a Convolutional Neural Network (CNN) to analyze eye regions for drowsiness detection, utilizing OpenCV for video capture and Dlib for facial landmark detection. The system continuously monitors the driver's eyes and provides alerts to enhance safety when signs of drowsiness are detected.",
            actions: [
                { label: "View Project", variant: "default" as const, url: "https://github.com/vaibhavzalte/" },
                { label: "Source Code", variant: "outline" as const, url: "https://github.com/vaibhavzalte/" },
            ],
        },
    ],
    experience: [
        {
            position: "Software Developer",
            companyName: "North Star Metrics",
            companyUrl: "https://ntsmetrics.com/",
            duration: "July–Sep 2024",
            badges: ["React.js", "Tailwind CSS", "Redux Toolkit", "Git"],
            description: "I build responsive web pages with React.js and Tailwind CSS, manage state using Redux Toolkit, and integrate APIs with Axios for seamless data handling.",
            actions: [
                { label: "View Project", variant: "default" as const, url: "https://github.com/vaibhavzalte/" },
                { label: "Source Code", variant: "outline" as const, url: "https://github.com/vaibhavzalte/" },
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
