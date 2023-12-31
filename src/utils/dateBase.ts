import {
    AdventagesDataType,
    OurProcessType,
    ProgrammingLanguagesType,
    ReviewDataType,
    ServicesDataType,
} from "../types/types";
import { ASSETS } from "./assetsRequires";

export const RateData = [
    {
        id: 1,
        title: "starter",
        name: "individual",
        icon: ASSETS.openBoxG,
        price: "$3500",
        period: "starter_price_time",
        info: [
            {
                name: "starter_info_one",
            },
            {
                name: "starter_info_two",
            },
            {
                name: "starter_info_three",
            },
            {
                name: "starter_info_four",
            },
            {
                name: "starter_info_five",
            },
            {
                name: "starter_info_six",
            },
        ],
    },
    {
        id: 2,
        title: "premium",
        name: "business",
        icon: ASSETS.increaseG,
        price: "$7000",
        period: "premium_price_time",
        info: [
            {
                name: "premium_info_one",
            },
            {
                name: "premium_info_two",
            },
            {
                name: "premium_info_three",
            },
            {
                name: "premium_info_four",
            },
        ],
    },
    {
        id: 3,
        title: "custom",
        name: "enterprise",
        icon: ASSETS.diamondG,
        price: "TBD",
        period: "custom_price_time",
        info: [
            {
                name: "custom_info_one",
            },
            {
                name: "custom_info_two",
            },
            {
                name: "custom_info_three",
            },
            {
                name: "custom_info_four",
            },
            {
                name: "custom_info_five",
            },
            {
                name: "custom_info_six",
            },
        ],
    },
];

export const ServicesData: ServicesDataType[] = [
    {
        id: 1,
        name: "mobile_app_development",
        text: "mobile_app_info",
        icon: process.env.PUBLIC_URL + "/icons/phone.svg",
    },

    {
        id: 2,
        name: "cms",
        text: "cms_info",
        icon: process.env.PUBLIC_URL + "/icons/gr4.svg",
    },
    {
        id: 3,
        name: "ui_ux",
        text: "ui_ux_info",
        icon: process.env.PUBLIC_URL + "/icons/gr5.svg",
    },
    {
        id: 4,
        name: "website",
        text: "website_info",
        icon: process.env.PUBLIC_URL + "/icons/gr3.svg",
    },
    {
        id: 5,
        name: "software",
        text: "software_info",
        icon: process.env.PUBLIC_URL + "/icons/ux.svg",
    },
    {
        id: 6,
        name: "sem",
        text: "sem_info",
        icon: process.env.PUBLIC_URL + "/icons/gr2.svg",
    },
];

export const AdventagesData: AdventagesDataType[] = [
    {
        id: 1,
        name: "design_process",
        text: `design_process_info`,
        icon: process.env.PUBLIC_URL + "/icons/light.svg",
    },

    {
        id: 2,
        name: "personalized_customization",
        text: `personalized_customization_info`,
        icon: process.env.PUBLIC_URL + "/icons/setting.svg",
    },
    {
        id: 3,
        name: "eco_conscious",
        text: `eco_conscious_info`,
        icon: process.env.PUBLIC_URL + "/icons/gr6.svg",
    },
    {
        id: 4,
        name: "mobile_friendly",
        text: `mobile_friendly_info`,
        icon: process.env.PUBLIC_URL + "/icons/phone.svg",
    },
    {
        id: 5,
        name: "robust_data",
        text: `robust_data_info`,
        icon: process.env.PUBLIC_URL + "/icons/gr7.svg",
    },
    {
        id: 6,
        name: "attentive_customer",
        text: `attentive_customer_info`,
        icon: process.env.PUBLIC_URL + "/icons/group.svg",
    },
];

export const ReviewsData: ReviewDataType[] = [
    {
        id: 1,
        title: "The best developers only for you",
        name: "Kamronbek J",
        comment:
            "Kamronbek has more than 6 years of experience in software development. After graduating from INHA university he helped more than 20 startups to implement their ideas in the form of cross-platform mobile apps",
        salary: "$34 /h",
        aboutPerson: "",
        whereFrom: "Toshkent Uzbekistan",
        totalExperience: "6+ Years Of Experience",
        expert: "Expert React-Native Developer",
        expertSkill: "React-Native",
        image: ASSETS.developer1,
        job: "Fullstack Developer",
        education: [
            {
                edu: "INHA university in Tashkent",
                branch: "Computer Science and Engineering(CSE)",
            },
        ],
        strengths: [
            {
                item: "Excellent in frontend React apps",
            },
            {
                item: "Great communicator",
            },
            {
                item: "Good experience with new libraries like Next.js & Nuxt.js",
            },
        ],
        skills: [
            {
                id: 1,
                skillsIcon: process.env.PUBLIC_URL + "/icons/react.svg",
                skillsName: "React-Native",
                experience: "6+ years",
                expertise: true,
            },
            {
                id: 2,
                skillsIcon: process.env.PUBLIC_URL + "/icons/react.svg",
                skillsName: "React",
                experience: "6+ years",
                expertise: true,
            },
            {
                id: 3,
                skillsIcon: process.env.PUBLIC_URL + "/icons/js.svg",
                skillsName: "JS/TS",
                experience: "6+ years",
                expertise: true,
            },
            {
                id: 4,
                skillsIcon: process.env.PUBLIC_URL + "/icons/css.svg",
                skillsName: "HTML/CSS",
                experience: "4 years",
                expertise: false,
            },
            {
                id: 5,
                skillsIcon: process.env.PUBLIC_URL + "/icons/firebase.svg",
                skillsName: "Firebase",
                experience: "4 years",
                expertise: false,
            },
            {
                id: 6,
                skillsIcon: process.env.PUBLIC_URL + "/icons/node.svg",
                skillsName: "NodeJs",
                experience: "4 years",
                expertise: false,
            },
        ],
        experience: [
            {
                title: "React Native/React developer",
                type: "Freelance",
                time: "1 year 11 months",
                info: [
                    {
                        text: `Designed and developed the user interface of a ProjectNexus app using
React Native.`,
                    },
                    {
                        text: `Integrated the Blockchain into the app, working with smart contracts,
creating wallets, and integrating with various Blockchain protocols.`,
                    },
                    {
                        text: `Implemented security measures to protect user data and transactions`,
                    },
                    {
                        text: `Collaborated with other members of the development team, including
designers, back-end developers, and project managers, to ensure that the
project is on track and meets the requirements`,
                    },
                    {
                        text: `Stayed up-to-date with the latest developments and best practices in
React Native development to ensure that the app is using the most current
and efficient technologies`,
                    },
                ],
                skills: [
                    {
                        icon: process.env.PUBLIC_URL + "/icons/react.svg",
                        name: "React-native",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/svelte.svg",
                        name: "Svelte",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/react.svg",
                        name: "React",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/js.svg",
                        name: "JavaScript",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/ts.svg",
                        name: "TypeScript",
                    },
                ],
            },
            {
                title: "React Native/React developer",
                type: "Freelance",
                time: "2 years 4 months",
                info: [
                    {
                        text: `Developed and maintained cross-platform mobile applications using
React Native, Redux, and other modern technologies for iOS and Android`,
                    },
                    {
                        text: `Implemented complex UI components, animations, and user interactions
following design guidelines and best practices`,
                    },
                    {
                        text: `Collaborated with backend developers to integrate RESTful APIs and
enhance app functionality`,
                    },
                    {
                        text: `Wrote and maintained unit tests using Jest and Enzyme to ensure code
            stability and quality`,
                    },
                    {
                        text: `Participated in code reviews, providing and receiving constructive
            feedback to improve overall code quality`,
                    },
                ],
                skills: [
                    {
                        icon: process.env.PUBLIC_URL + "/icons/react.svg",
                        name: "React-native",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/graph.svg",
                        name: "GraphQL",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/firebase.svg",
                        name: "Firebase",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/react.svg",
                        name: "React",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/js.svg",
                        name: "JavaScript",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/ts.svg",
                        name: "TypeScript",
                    },
                ],
            },
            {
                title: "Software Developer",
                type: "Agency",
                time: "10 months",
                info: [
                    {
                        text: `Active mobile app development and maintaining`,
                    },
                    {
                        text: `Implementing app's features such as:
    static and animated UIs elements
    REST API back-end interaction
    web-socket based features`,
                    },
                    {
                        text: `Code reviews`,
                    },
                    {
                        text: `New team's member on-boarding and knowledge transfer`,
                    },
                    {
                        text: `Close communication with Back-end, QA and BA teams to achieve a more
    preferable results`,
                    },
                ],
                skills: [
                    {
                        icon: process.env.PUBLIC_URL + "/icons/react.svg",
                        name: "React-native",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/react.svg",
                        name: "React",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/js.svg",
                        name: "JavaScript",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/ts.svg",
                        name: "TypeScript",
                    },
                ],
            },
            {
                title: "Mobile developer",
                type: "Banking",
                time: "7 months",
                info: [
                    {
                        text: `Develop and maintain the mobile application using React Native
framework`,
                    },
                    {
                        text: `Collaborate with team members to ensure seamless integration and user
experience`,
                    },
                    {
                        text: `Implement and maintain security features and optimize app performance`,
                    },
                    {
                        text: `Troubleshoot issues and provide technical support to team members`,
                    },
                    {
                        text: `Stay up-to-date with new mobile development technologies`,
                    },
                ],
                skills: [
                    {
                        icon: process.env.PUBLIC_URL + "/icons/react.svg",
                        name: "React-native",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/react.svg",
                        name: "React",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/js.svg",
                        name: "JavaScript",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/ts.svg",
                        name: "TypeScript",
                    },
                ],
            },
            {
                title: "Frontend & Mobile developer",
                type: "Fintech",
                time: "2 years 2 months",
                info: [
                    {
                        text: `Developing and maintaining the app's codebase using appropriate
programming languages, frameworks, and technologies`,
                    },
                    {
                        text: `Collaborating with other developers, designers, and product owners to
ensure a seamless integration of the app's front-end and back-end
components`,
                    },
                    {
                        text: `Conducting regular code reviews to ensure high-quality, maintainable code`,
                    },
                ],
                skills: [
                    {
                        icon: process.env.PUBLIC_URL + "/icons/react.svg",
                        name: "React-native",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/react.svg",
                        name: "React",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/js.svg",
                        name: "JavaScript",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/html.svg",
                        name: "HTML/CSS",
                    },
                ],
            },
        ],
        communication: 9,
        technicalSkill: 9,
    },
    {
        id: 2,
        title: "The best developers only for you",
        aboutPerson: "",
        name: "Saidamir B",
        comment:
            "Software Engineer with experience in developing web applications, microservices, and distributed systems participating in the complete product development lifecycle of successfully launched applications. An empathetic team player and mentor.",
        salary: "$34 /h",
        whereFrom: "Berlin, Germany",
        totalExperience: "5+ Years Of Experience",
        expert: "Expert Backend Developer",
        expertSkill: "Golang",
        image: ASSETS.developer8,
        job: "Senior Backend Developer",
        education: [
            {
                edu: "Inha University",
                branch: "Bachelor of Science, School of Computer and Information Engineering",
            },
        ],
        strengths: [
            {
                item: "Excellent in frontend React apps",
            },
            {
                item: "Great communicator",
            },
            {
                item: "Good experience with new libraries like Next.js & Nuxt.js",
            },
        ],
        skills: [
            {
                id: 2,
                skillsIcon: process.env.PUBLIC_URL + "/icons/go.svg",
                skillsName: "Golang",
                experience: "5+ years",
                expertise: true,
            },
            {
                id: 3,
                skillsIcon: process.env.PUBLIC_URL + "/icons/node.svg",
                skillsName: "NodeJS",
                experience: "5+ years",
                expertise: true,
            },
            {
                id: 4,
                skillsIcon: process.env.PUBLIC_URL + "/icons/posgres.svg",
                skillsName: "PostgreSQL",
                experience: "4 years",
                expertise: true,
            },
            {
                id: 5,
                skillsIcon: process.env.PUBLIC_URL + "/icons/docer.svg",
                skillsName: "Docker",
                experience: "3 years",
                expertise: false,
            },
            {
                id: 6,
                skillsIcon: process.env.PUBLIC_URL + "/icons/mongo.svg",
                skillsName: "MongoDB",
                experience: "4 years",
                expertise: false,
            },
            {
                id: 6,
                skillsIcon: process.env.PUBLIC_URL + "/icons/cassandra.png",
                skillsName: "Cassandra",
                experience: "4 years",
                expertise: true,
            },
            {
                id: 7,
                skillsIcon: process.env.PUBLIC_URL + "/icons/elasticsearch.jpg",
                skillsName: "Elastic Search",
                experience: "4 years",
                expertise: true,
            },
            {
                id: 8,
                skillsIcon: process.env.PUBLIC_URL + "/icons/gitt.svg",
                skillsName: "Git",
                experience: "4 years",
                expertise: true,
            },
            {
                id: 9,
                skillsIcon: process.env.PUBLIC_URL + "/icons/ubuntu.svg",
                skillsName: "Linux",
                experience: "4 years",
                expertise: true,
            },
            {
                id: 10,
                skillsIcon: process.env.PUBLIC_URL + "/icons/kubernetes.svg",
                skillsName: "Kubernetes",
                experience: "4 years",
                expertise: true,
            },
            {
                id: 11,
                skillsIcon: process.env.PUBLIC_URL + "/icons/rest.jpg",
                skillsName: "REST",
                experience: "4 years",
                expertise: true,
            },
            {
                id: 12,
                skillsIcon: "",
                skillsName: "TDD",
                experience: "4 years",
                expertise: true,
            },
            {
                id: 13,
                skillsIcon: "",
                skillsName: "Microservices",
                experience: "4 years",
                expertise: true,
            },
            {
                id: 14,
                skillsIcon: "",
                skillsName: "CI/CD",
                experience: "4 years",
                expertise: true,
            },
            {
                id: 15,
                skillsIcon: process.env.PUBLIC_URL + "/icons/rabbitmq.png",
                skillsName: "RabbitMQ",
                experience: "4 years",
                expertise: true,
            },
            {
                id: 16,
                skillsIcon: "",
                skillsName: "gRPC",
                experience: "4 years",
                expertise: true,
            },
        ],
        experience: [
            {
                title: "Golang Engineer",
                type: "Healthcare",
                time: "1 year 2 months",
                info: [
                    {
                        text: "Avoided dynamic RAM allocation by reading and writing files chunk by chunk from/to GCS while combining a list of PDF files.",
                    },
                ],
                skills: [
                    {
                        icon: process.env.PUBLIC_URL + "/icons/go.svg",
                        name: "Golang",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/node.svg",
                        name: "NodeJS",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/posgres.svg",
                        name: "PostgreSQL",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/docer.svg",
                        name: "Docker",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/mongo.svg",
                        name: "MongoDB",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/cassandra.png",
                        name: "Cassandra",
                    },
                    {
                        icon:
                            process.env.PUBLIC_URL + "/icons/elasticsearch.jpg",
                        name: "Elastic Search",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/gitt.svg",
                        name: "Git",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/linux.svg",
                        name: "Linux",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/kubernetes.svg",
                        name: "Kubernetes",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/rest.jpg",
                        name: "REST",
                    },
                    {
                        icon: "",
                        name: "TDD",
                    },
                    {
                        icon: "",
                        name: "Microservices",
                    },
                    {
                        icon: "",
                        name: "CI/CD",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/rabbitmq.png",
                        name: "RabbitMQ",
                    },
                    {
                        icon: "",
                        name: "gRPC",
                    },
                ],
            },
            {
                title: "Lead Backend Engineer",
                type: "Agency",
                time: "1 year 9 months",
                info: [
                    {
                        text: "Actively participated in the team forming process and interviewed 20+ engineers for backend positions",
                    },
                    {
                        text: "Provided leadership and direction for new hires, including mentoring, orientation, and training",
                    },
                    {
                        text: "Designed a solution for a real-life vehicle routing problem to distribute orders optimally using VROOM+Golang+Gin+RabbitMQ+PostgreSQL",
                    },
                    {
                        text: "Developed MRZ text scanner from passport photos using NodeJS+ExpressJS+TesseractOCR and achieved 2 times higher accuracy by training Tesseract using 5000+ Uzbek passport MRZ samples",
                    },
                ],
                skills: [
                    {
                        icon: process.env.PUBLIC_URL + "/icons/go.svg",
                        name: "Golang",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/node.svg",
                        name: "NodeJS",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/posgres.svg",
                        name: "PostgreSQL",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/docer.svg",
                        name: "Docker",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/mongo.svg",
                        name: "MongoDB",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/cassandra.png",
                        name: "Cassandra",
                    },
                    {
                        icon:
                            process.env.PUBLIC_URL + "/icons/elasticsearch.jpg",
                        name: "Elastic Search",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/gitt.svg",
                        name: "Git",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/linux.svg",
                        name: "Linux",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/kubernetes.svg",
                        name: "Kubernetes",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/rest.jpg",
                        name: "REST",
                    },
                    {
                        icon: "",
                        name: "TDD",
                    },
                    {
                        icon: "",
                        name: "Microservices",
                    },
                    {
                        icon: "",
                        name: "CI/CD",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/rabbitmq.png",
                        name: "RabbitMQ",
                    },
                    {
                        icon: "",
                        name: "gRPC",
                    },
                ],
            },
            {
                title: "Backend Engineer",
                type: "Agency",
                time: "2 years 6 months",
                info: [
                    {
                        text: "Built an application for distributing messages to connected phones to send mobile SMS using Golang+Gin+GORM(PostgreSQL)+TCP Socket",
                    },
                    {
                        text: "Developed REST API endpoints to apply online driving tests using Golang+Gin+GORM(PostgreSQL)",
                    },
                    {
                        text: "Developed a backend of an eCommerce website using NodeJS+GraphQL+Mongoose(MongoDB)",
                    },
                ],
                skills: [
                    {
                        icon: process.env.PUBLIC_URL + "/icons/go.svg",
                        name: "Golang",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/node.svg",
                        name: "NodeJS",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/posgres.svg",
                        name: "PostgreSQL",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/docer.svg",
                        name: "Docker",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/mongo.svg",
                        name: "MongoDB",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/cassandra.png",
                        name: "Cassandra",
                    },
                    {
                        icon:
                            process.env.PUBLIC_URL + "/icons/elasticsearch.jpg",
                        name: "Elastic Search",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/gitt.svg",
                        name: "Git",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/linux.svg",
                        name: "Linux",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/kubernetes.svg",
                        name: "Kubernetes",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/rest.jpg",
                        name: "REST",
                    },
                    {
                        icon: "",
                        name: "TDD",
                    },
                    {
                        icon: "",
                        name: "Microservices",
                    },
                    {
                        icon: "",
                        name: "CI/CD",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/rabbitmq.png",
                        name: "RabbitMQ",
                    },
                    {
                        icon: "",
                        name: "gRPC",
                    },
                ],
            },
        ],
        communication: 7,
        technicalSkill: 9,
    },
    {
        id: 3,
        title: "The best developers only for you",
        name: "Sarvar A",
        comment:
            "Great experience with React Native and its ecosystem for over 4 years Hands-on knowledge of UX/UI concepts and practical experience in implementing design principles and rules in the web and mobile application development process  Hard working, responsible, punctual, and result-oriented  Able to perform multiple tasks, set priorities, and meet deadlines Strong debugging, analytical, and problem-solving abilities Ability to participate in individual or team software development process",
        salary: "$34 /h",
        aboutPerson: " ",
        whereFrom: "Toshkent Uzbekistan",
        totalExperience: "4+ Years Of Experience",
        expert: "Expert React-Native Developer",
        expertSkill: "React-Native",
        image: ASSETS.developer2,
        job: "Senior React-Native Developer",
        education: [
            {
                edu: "Tashkent university of information technologies",
                branch: "Computer Science and Engineering(CSE)",
            },
        ],
        strengths: [
            {
                item: "Excellent in frontend React apps",
            },
            {
                item: "Great communicator",
            },
            {
                item: "Good experience with new libraries like Next.js & Nuxt.js",
            },
        ],
        skills: [
            {
                id: 1,
                skillsIcon: process.env.PUBLIC_URL + "/icons/flutter.svg",
                skillsName: "Flutter",
                experience: "3+ years",
                expertise: true,
            },
            {
                id: 2,
                skillsIcon: process.env.PUBLIC_URL + "/icons/react.svg",
                skillsName: "React-Native",
                experience: "4+ years",
                expertise: true,
            },
            {
                id: 3,
                skillsIcon: process.env.PUBLIC_URL + "/icons/react.svg",
                skillsName: "React",
                experience: "4+ years",
                expertise: true,
            },
            {
                id: 4,
                skillsIcon: process.env.PUBLIC_URL + "/icons/js.svg",
                skillsName: "JS/TS",
                experience: "4+ years",
                expertise: true,
            },
            {
                id: 5,
                skillsIcon: process.env.PUBLIC_URL + "/icons/css.svg",
                skillsName: "HTML/CSS",
                experience: "4 years",
                expertise: false,
            },
            {
                id: 6,
                skillsIcon: process.env.PUBLIC_URL + "/icons/firebase.svg",
                skillsName: "Firebase",
                experience: "4 years",
                expertise: false,
            },
            {
                id: 7,
                skillsIcon: process.env.PUBLIC_URL + "/icons/node.svg",
                skillsName: "NodeJs",
                experience: "1 years",
                expertise: false,
            },
        ],
        experience: [
            {
                title: "Senior Software Engineer",
                type: "Agency",
                time: "1 year 3 months",
                info: [
                    {
                        text: "Responsible for full app life-cycle: design, build, test, deploy, release to the app store and play market.",
                    },
                    {
                        text: " Collaborating with the product management, marketing, designers, and technology and architecture teams.",
                    },
                    {
                        text: " Using external data sources and APIs.",
                    },
                ],
                skills: [
                    {
                        icon: process.env.PUBLIC_URL + "/icons/js.svg",
                        name: "JS",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/react.svg",
                        name: "React-Native",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/firebase.svg",
                        name: "Firebase",
                    },
                ],
            },
            {
                title: "React Native Developer",
                type: "Fintech",
                time: "1 year 4 months",
                info: [
                    {
                        text: "Built reusable components for the future use",
                    },
                    {
                        text: "Developed a well-structured, maintainable, and easy-to-understand applications while adhering to the defined coding standards",
                    },
                    {
                        text: "Collaborate with the design team, providing creative input and technical feasibility",
                    },
                    {
                        text: "Working with outside data sources and APIs",
                    },
                    {
                        text: "Working on creation of e-commerce, mobile applications that provide a superior online shopping experience for the customers, where the users can browse through the products, search for products and make a purchase easily using credit card payments using this app",
                    },
                ],
                skills: [
                    {
                        icon: process.env.PUBLIC_URL + "/icons/js.svg",
                        name: "JS",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/React.svg",
                        name: "React-Native",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/firebase.svg",
                        name: "Firebase",
                    },
                ],
            },
            {
                title: "Software Engineer and Team Lead",
                type: "Agency",
                time: "9 months",
                info: [
                    {
                        text: "Managing several projects while working in a fast-paced atmosphere.",
                    },
                    {
                        text: "Created mobile applications for mobile devices and TV",
                    },
                    {
                        text: "Training, mentoring and collaborating with Junior Engineers while developing applications.",
                    },
                    {
                        text: "Third party integration with Saga, Crashlytics, Google Maps, Sentry, and CodePush.",
                    },
                ],
                skills: [
                    {
                        icon: process.env.PUBLIC_URL + "/icons/react.svg",
                        name: "React-Native",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/js.svg",
                        name: "JS/TS",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/css.svg",
                        name: "HTML/CSS",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/firebase.svg",
                        name: "Firebase",
                    },
                ],
            },
        ],
        communication: 9,
        technicalSkill: 9,
    },
    {
        id: 4,
        title: "The best developers only for you",
        name: "Diyor A",
        comment:
            "Great experience with React Native and its ecosystem for over 3 years Hands-on knowledge of UX/UI concepts and practical experience in implementing design principles and rules in the web and mobile application development process  Hard working, responsible, punctual, and result-oriented  Able to perform multiple tasks, set priorities, and meet deadlines Strong debugging, analytical, and problem-solving abilities Ability to participate in individual or team software development process",
        salary: "$21 /h",
        aboutPerson:
            "Hello, my name is Diyor, I am 22 years old and I'm from Samarkand. I graduated from Samarkand branch of Tashkent University of Information Technologies in software engineering. I'm a Full Stack and React-Native developer. I have been working with programming for 4 years. I've been working mobile React-Native programming for 2+ years now.",
        whereFrom: "Tashkent Uzbekistan",
        totalExperience: "4+ Years Of Experience",
        expert: "Expert React-Native Developer",
        expertSkill: "React / React-Native",
        image: ASSETS.developer10,
        job: "React-Native and Full stack Developer",
        education: [
            {
                edu: "Tashkent university of information technologies",
                branch: "Software Engineering(CSE)",
            },
        ],
        strengths: [
            {
                item: "Excellent in frontend React apps",
            },
            {
                item: "Great communicator",
            },
            {
                item: "Good experience with new libraries like Next.js & Node.js",
            },
        ],
        skills: [
            {
                id: 2,
                skillsIcon: process.env.PUBLIC_URL + "/icons/react.svg",
                skillsName: "React-Native",
                experience: "2+ years",
                expertise: true,
            },
            {
                id: 3,
                skillsIcon: process.env.PUBLIC_URL + "/icons/react.svg",
                skillsName: "React",
                experience: "3+ years",
                expertise: true,
            },
            {
                id: 4,
                skillsIcon: process.env.PUBLIC_URL + "/icons/js.svg",
                skillsName: "JS/TS",
                experience: "4+ years",
                expertise: true,
            },
            {
                id: 5,
                skillsIcon: process.env.PUBLIC_URL + "/icons/css.svg",
                skillsName: "HTML/CSS",
                experience: "4 years",
                expertise: false,
            },
            {
                id: 6,
                skillsIcon: process.env.PUBLIC_URL + "/icons/firebase.svg",
                skillsName: "Firebase",
                experience: "1+ years",
                expertise: false,
            },
            {
                id: 7,
                skillsIcon: process.env.PUBLIC_URL + "/icons/node.svg",
                skillsName: "NodeJs",
                experience: "1+ years",
                expertise: false,
            },
        ],
        experience: [
            {
                title: "React Developer",
                type: "Agency",
                time: "1 year 3 months",
                info: [
                    {
                        text: "Responsible for full app life-cycle: design, build, test, deploy",
                    },
                    {
                        text: " Collaborating with the product management, marketing, designers, and technology and architecture teams.",
                    },
                    {
                        text: " Using external data sources and APIs.",
                    },
                ],
                skills: [
                    {
                        icon: process.env.PUBLIC_URL + "/icons/js.svg",
                        name: "JS",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/react.svg",
                        name: "React",
                    },
                ],
            },
            {
                title: "Full Stack Developer",
                type: "Qosmoocom",
                time: "1 year 6 months",
                info: [
                    {
                        text: "Built reusable components for the future use",
                    },
                    {
                        text: "Developed a well-structured, maintainable, and easy-to-understand applications while adhering to the defined coding standards",
                    },
                    {
                        text: "Collaborate with the design team, providing creative input and technical feasibility",
                    },
                    {
                        text: "Working with outside data sources and APIs",
                    },
                    {
                        text: "Working on creation of e-commerce, where the users can browse through the products, search for products and make a purchase easily using credit card payments using this app",
                    },
                ],
                skills: [
                    {
                        icon: process.env.PUBLIC_URL + "/icons/js.svg",
                        name: "JS",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/React.svg",
                        name: "React JS",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/node.svg",
                        name: "Node JS",
                    },
                ],
            },
            {
                title: "React / React Native Developer",
                type: "Empire Soft",
                time: "1 year 9 months",
                info: [
                    {
                        text: "Managing several projects while working in a fast-paced atmosphere.",
                    },
                    {
                        text: "Created mobile applications for mobile devices and TV",
                    },
                    {
                        text: "Training, mentoring and collaborating with Junior Engineers while developing applications.",
                    },
                    {
                        text: "Third party integration with Saga, Crashlytics, Google Maps, Sentry, and CodePush.",
                    },
                ],
                skills: [
                    {
                        icon: process.env.PUBLIC_URL + "/icons/react.svg",
                        name: "React-Native",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/react.svg",
                        name: "React",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/js.svg",
                        name: "JS/TS",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/css.svg",
                        name: "HTML/CSS",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/node.svg",
                        name: "Node JS",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/firebase.svg",
                        name: "Firebase",
                    },
                ],
            },
        ],
        communication: 9,
        technicalSkill: 9,
    },
    {
        id: 5,
        aboutPerson: "",
        title: "The best developers only for you",
        name: "Sergey Sh",
        comment:
            "Has participated and lead whole process of high load mobile application from structuring to auto deployment. Did code reviews and worked direclty with clients many times. Has great experience in configuring the app Accessibility.",
        salary: "$34 /h",
        whereFrom: "Krasnoyarsk Russia",
        totalExperience: "4+ Years Of Experience",
        expert: "Expert React-Native Developer",
        expertSkill: "React-Native",
        image: ASSETS.developer3,
        job: "Senior React-Native Developer",
        education: [
            {
                edu: "Siberian Federal University",
                branch: "Bachelor's degree, Computer Software Engineering, Master's degree, Computer Software Engineering",
            },
        ],
        strengths: [
            {
                item: "Excellent in frontend React apps",
            },
            {
                item: "Great communicator",
            },
            {
                item: "Good experience with new libraries like Next.js & Nuxt.js",
            },
        ],
        skills: [
            {
                id: 1,
                skillsIcon: process.env.PUBLIC_URL + "/icons/react.svg",
                skillsName: "React-Native",
                experience: "4+ years",
                expertise: true,
            },
            {
                id: 3,
                skillsIcon: process.env.PUBLIC_URL + "/icons/react.svg",
                skillsName: "React",
                experience: "4+ years",
                expertise: true,
            },
            {
                id: 3,
                skillsIcon: process.env.PUBLIC_URL + "/icons/js.svg",
                skillsName: "JS/TS",
                experience: "4+ years",
                expertise: true,
            },
            {
                id: 4,
                skillsIcon: process.env.PUBLIC_URL + "/icons/css.svg",
                skillsName: "HTML/CSS",
                experience: "4 years",
                expertise: false,
            },
            {
                id: 5,
                skillsIcon: process.env.PUBLIC_URL + "/icons/firebase.svg",
                skillsName: "Firebase",
                experience: "4 years",
                expertise: false,
            },
            {
                id: 6,
                skillsIcon:
                    process.env.PUBLIC_URL + "/icons/react-navigation.png",
                skillsName: "React navigation",
                experience: "4 years",
                expertise: true,
            },
        ],
        experience: [
            {
                title: "Senior Software Engineer",
                type: "Agency",
                time: "1 year 9 months",
                info: [
                    {
                        text: "Development and support of mobile applications.",
                    },
                    {
                        text: `Participated in the development of new and existing solutions, for example: financial app – pension fund management; IoT-app – smart water bar control; find and book parking lots.`,
                    },
                    {
                        text: "Writing native code in obj-c, swift and java.",
                    },
                ],
                skills: [
                    {
                        icon: process.env.PUBLIC_URL + "/icons/React.svg",
                        name: "React-Native",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/mobx.png",
                        name: "MobX",
                    },
                    {
                        icon:
                            process.env.PUBLIC_URL +
                            "/icons/react-navigation.png",
                        name: "React-navigation",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/ts.svg",
                        name: "TS",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/firebase.svg",
                        name: "Firebase",
                    },
                ],
            },
            {
                title: "React Native Developer",
                type: "Agency",
                time: "1 year 1 months",
                info: [
                    {
                        text: "Development and support of a food delivery service.",
                    },
                    {
                        text: "Used Redux, SSR, SCSS, Node.js as well as setting up webpack from scratch in my pet projects",
                    },
                    {
                        text: "Development and further publication in the App Store / Google Play of an application for a recreation center (ordering food, ordering a bathhouse, signing up for activities, etc.)",
                    },
                ],
                skills: [
                    {
                        icon: process.env.PUBLIC_URL + "/icons/react.svg",
                        name: "React",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/redux.svg",
                        name: "Reux",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/sass.svg",
                        name: "SASS",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/web.svg",
                        name: "Webpack",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/mobx.png",
                        name: "MobX",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/react.svg",
                        name: "React-Native",
                    },
                    {
                        icon:
                            process.env.PUBLIC_URL +
                            "/icons/react-navigation.png",
                        name: "React-navigation",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/firebase.svg",
                        name: "Firebase",
                    },
                ],
            },
        ],
        communication: 7,
        technicalSkill: 9,
    },
    {
        id: 6,
        title: "The best developers only for you",
        name: "Nurulloh T",
        comment:
            "Nurullah has more than 1 and a half years of experience in frontend development. After graduating from empire it academy, he did many start ups of Empire-soft and participated in some big start ups.",
        salary: "$18 /h",
        aboutPerson: "",
        whereFrom: "Tashkent Uzbekistan",
        totalExperience: "1.5+ Years Of Experience",
        expert: "React Developer",
        expertSkill: "React",
        image: ASSETS.developer4,
        job: "React Developer",
        education: [
            {
                edu: "Empire It Academy",
                branch: "Computer Science and Engineering(CSE)",
            },
        ],
        strengths: [
            {
                item: "Excellent in frontend React apps",
            },
            {
                item: "Great communicator",
            },
            {
                item: "Good experience with new libraries like Next.js & React.js",
            },
        ],
        skills: [
            {
                id: 1,
                skillsIcon: process.env.PUBLIC_URL + "/icons/react.svg",
                skillsName: "React",
                experience: "1.5+ years",
                expertise: true,
            },
            {
                id: 2,
                skillsIcon: process.env.PUBLIC_URL + "/icons/react.svg",
                skillsName: "React-Native",
                experience: "half year",
                expertise: true,
            },
            {
                id: 3,
                skillsIcon: process.env.PUBLIC_URL + "/icons/js.svg",
                skillsName: "JS/TS",
                experience: "1.5+ years",
                expertise: true,
            },
            {
                id: 4,
                skillsIcon: process.env.PUBLIC_URL + "/icons/css.svg",
                skillsName: "HTML/CSS",
                experience: "2+ years",
                expertise: true,
            },
            {
                id: 5,
                skillsIcon: process.env.PUBLIC_URL + "/icons/firebase.svg",
                skillsName: "Firebase",
                experience: "half year",
                expertise: true,
            },
            {
                id: 6,
                skillsIcon:
                    process.env.PUBLIC_URL + "/icons/react-navigation.png",
                skillsName: "React-navigation",
                experience: "1+ years",
                expertise: false,
            },
            {
                id: 7,
                skillsIcon: process.env.PUBLIC_URL + "/icons/redux.svg",
                skillsName: "Redux",
                experience: "1 year",
                expertise: false,
            },
            {
                id: 8,
                skillsIcon: process.env.PUBLIC_URL + "/icons/mobx.png",
                skillsName: "MobX",
                experience: "half year",
                expertise: true,
            },
            {
                id: 9,
                skillsIcon: process.env.PUBLIC_URL + "/icons/gitt.svg",
                skillsName: "Git",
                experience: "2 years",
                expertise: false,
            },
            {
                id: 10,
                skillsIcon: process.env.PUBLIC_URL + "/icons/gitlab.svg",
                skillsName: "Gitlab",
                experience: "1.5+ years",
                expertise: false,
            },
            {
                id: 11,
                skillsIcon: process.env.PUBLIC_URL + "/icons/git.svg",
                skillsName: "Github",
                experience: "2 years",
                expertise: false,
            },
        ],
        experience: [
            {
                title: "React developer",
                type: "Agency",
                time: "1.5 years",
                info: [
                    {
                        text: "Participated in creating the app from scratch and designing the structure",
                    },
                    {
                        text: "Wrote unit and e2e tests",
                    },
                    {
                        text: "Auto deployed the apps to Play market and AppStore using Fastlane",
                    },
                ],
                skills: [
                    {
                        icon: process.env.PUBLIC_URL + "/icons/react.svg",
                        name: "React",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/js.svg",
                        name: "JavaScript",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/ts.svg",
                        name: "TypeScript",
                    },
                ],
            },
            {
                title: "React developer",
                type: "Agency",
                time: "1 year",
                info: [
                    { text: "Worked on creating reusable UI components" },
                    {
                        text: "Implemented automatic CI/CD using Gitlab actions",
                    },
                ],
                skills: [
                    {
                        icon: process.env.PUBLIC_URL + "/icons/react.svg",
                        name: "React",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/js.svg",
                        name: "JavaScript",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/ts.svg",
                        name: "TypeScript",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/firebase.svg",
                        name: "Firebase",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/mobx.png",
                        name: "MobX",
                    },
                ],
            },
        ],
        communication: 8,
        technicalSkill: 7,
    },
    {
        id: 7,
        title: "The best developers only for you",
        name: "Abdurakhmon Z",
        comment: `Abdurahman is 23 years old and from Samarkand. He studies computer engineering at theSamarkand branch of the Tashkent University of Information Technologies.
      He is React/React-Native developer. He is interested in mobile programming and has been working React/React-Native developer for more than 3 years.`,
        salary: "$20 /h",
        aboutPerson: "",
        whereFrom: "Toshkent Uzbekistan",
        totalExperience: "3+ Years Of Experience",
        expert: "Expert React-Native Developer",
        expertSkill: "React-Native",
        image: ASSETS.developer6,
        job: "Middle react-native developer",
        education: [
            {
                edu: "TUIT OF SAMARKAND",
                branch: "Computer engineer(CE)",
            },
        ],
        strengths: [
            {
                item: "Excellent in frontend React apps",
            },
            {
                item: "Great communicator",
            },
            {
                item: "Good experience with new libraries like Next.js & Nuxt.js",
            },
        ],
        skills: [
            {
                id: 1,
                skillsIcon: process.env.PUBLIC_URL + "/icons/react.svg",
                skillsName: "React-Native",
                experience: "3+ years",
                expertise: true,
            },
            {
                id: 2,
                skillsIcon: process.env.PUBLIC_URL + "/icons/react.svg",
                skillsName: "React",
                experience: "3+ years",
                expertise: true,
            },
            {
                id: 3,
                skillsIcon: process.env.PUBLIC_URL + "/icons/js.svg",
                skillsName: "JS/TS",
                experience: "3+ years",
                expertise: true,
            },
            {
                id: 4,
                skillsIcon: process.env.PUBLIC_URL + "/icons/css.svg",
                skillsName: "HTML/CSS",
                experience: "3 years",
                expertise: false,
            },
            {
                id: 5,
                skillsIcon: process.env.PUBLIC_URL + "/icons/firebase.svg",
                skillsName: "Firebase",
                experience: "1 year",
                expertise: false,
            },
            {
                id: 6,
                skillsIcon:
                    process.env.PUBLIC_URL + "/icons/react-navigation.png",
                skillsName: "React-navigation",
                experience: "3 years",
                expertise: false,
            },
            {
                id: 14,
                skillsIcon: process.env.PUBLIC_URL + "/icons/fastlane.png",
                skillsName: "Fastlane",
                experience: "3 years",
                expertise: false,
            },
            {
                id: 7,
                skillsIcon: "",
                skillsName: "React-native-reanimated",
                experience: "3 years",
                expertise: false,
            },
            {
                id: 8,
                skillsIcon: process.env.PUBLIC_URL + "/icons/redux.svg",
                skillsName: "Redux",
                experience: "3 years",
                expertise: false,
            },
            {
                id: 9,
                skillsIcon: process.env.PUBLIC_URL + "/icons/mobx.png",
                skillsName: "MobX",
                experience: "3 years",
                expertise: false,
            },
            {
                id: 10,
                skillsIcon: process.env.PUBLIC_URL + "/icons/graph.svg",
                skillsName: "GraphQL",
                experience: "3 years",
                expertise: false,
            },
            {
                id: 11,
                skillsIcon: process.env.PUBLIC_URL + "/icons/gitt.svg",
                skillsName: "Git",
                experience: "3 years",
                expertise: false,
            },
            {
                id: 12,
                skillsIcon: process.env.PUBLIC_URL + "/icons/gitlab.svg",
                skillsName: "Gitlab",
                experience: "3 years",
                expertise: false,
            },
            {
                id: 13,
                skillsIcon: process.env.PUBLIC_URL + "/icons/git.svg",
                skillsName: "Github",
                experience: "3 years",
                expertise: false,
            },
        ],
        experience: [
            {
                title: "React Native/React developer",
                type: "Agency",
                time: "2 years",
                info: [
                    {
                        text: "Participated in creating the app from scratch and designing the structure",
                    },
                    {
                        text: "Wrote unit and e2e tests",
                    },
                    {
                        text: "Auto deployed the apps to Play market and AppStore using Fastlane",
                    },
                ],
                skills: [
                    {
                        icon: process.env.PUBLIC_URL + "/icons/react.svg",
                        name: "React-native",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/react.svg",
                        name: "React",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/js.svg",
                        name: "JavaScript",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/ts.svg",
                        name: "TypeScript",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/fastlane.png",
                        name: "Fastlane",
                    },
                ],
            },
            {
                title: "React Native/React developer",
                type: "Agency",
                time: "1 year",
                info: [
                    { text: "Worked on creating reusable UI components" },
                    {
                        text: "Implemented automatic CI/CD using Gitlab actions",
                    },
                ],
                skills: [
                    {
                        icon: process.env.PUBLIC_URL + "/icons/react.svg",
                        name: "React-native",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/graph.svg",
                        name: "GraphQL",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/firebase.svg",
                        name: "Firebase",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/react.svg",
                        name: "React",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/js.svg",
                        name: "JavaScript",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/ts.svg",
                        name: "TypeScript",
                    },
                ],
            },
        ],
        communication: 6,
        technicalSkill: 9,
    },
    {
        id: 8,
        title: "The best developers only for you",
        name: "Malikov Sh",
        comment: `Shukhrat is a cross platform mobile developer with a good communication skills. He has participated in creating one of the biggest e-commerce websites of Uzbekistan`,
        salary: "$18 /h",
        aboutPerson: "",
        whereFrom: "Toshkent Uzbekistan",
        totalExperience: "2+ Years Of Experience",
        expert: "React-Native Developer",
        expertSkill: "React-Native",
        image: ASSETS.developer5,
        job: "Middle react-native developer",
        education: [
            {
                edu: "TUIT OF SAMARKAND",
                branch: "Computer engineer(CE)",
            },
            {
                edu: "TUIT OF SAMARKAND",
                branch: "Computer engineer(CE)",
            },
        ],
        strengths: [
            {
                item: "Excellent in frontend React apps",
            },
            {
                item: "Great communicator",
            },
            {
                item: "Good experience with new libraries like Next.js & Nuxt.js",
            },
        ],
        skills: [
            {
                id: 1,
                skillsIcon: process.env.PUBLIC_URL + "/icons/react.svg",
                skillsName: "React-Native",
                experience: "2+ years",
                expertise: true,
            },
            {
                id: 2,
                skillsIcon: process.env.PUBLIC_URL + "/icons/react.svg",
                skillsName: "React",
                experience: "2+ years",
                expertise: true,
            },
            {
                id: 3,
                skillsIcon: process.env.PUBLIC_URL + "/icons/js.svg",
                skillsName: "JS/TS",
                experience: "2+ years",
                expertise: true,
            },
            {
                id: 4,
                skillsIcon: process.env.PUBLIC_URL + "/icons/css.svg",
                skillsName: "HTML/CSS",
                experience: "2 years",
                expertise: false,
            },
            {
                id: 5,
                skillsIcon: process.env.PUBLIC_URL + "/icons/firebase.svg",
                skillsName: "Firebase",
                experience: "1 year",
                expertise: false,
            },
            {
                id: 6,
                skillsIcon:
                    process.env.PUBLIC_URL + "/icons/react-navigation.png",
                skillsName: "React-navigation",
                experience: "2 years",
                expertise: false,
            },
            {
                id: 8,
                skillsIcon: process.env.PUBLIC_URL + "/icons/redux.svg",
                skillsName: "Redux",
                experience: "3 years",
                expertise: false,
            },
            {
                id: 9,
                skillsIcon: process.env.PUBLIC_URL + "/icons/mobx.png",
                skillsName: "MobX",
                experience: "3 years",
                expertise: false,
            },
            {
                id: 11,
                skillsIcon: process.env.PUBLIC_URL + "/icons/gitt.svg",
                skillsName: "Git",
                experience: "3 years",
                expertise: false,
            },
            {
                id: 12,
                skillsIcon: process.env.PUBLIC_URL + "/icons/gitlab.svg",
                skillsName: "Gitlab",
                experience: "3 years",
                expertise: false,
            },
            {
                id: 13,
                skillsIcon: process.env.PUBLIC_URL + "/icons/git.svg",
                skillsName: "Github",
                experience: "3 years",
                expertise: false,
            },
        ],
        experience: [
            {
                title: "React Native/React developer",
                type: "Agency",
                time: "2 years",
                info: [
                    {
                        text: "Participated in creating the app from scratch and designing the structure",
                    },
                    {
                        text: "Wrote unit and e2e tests",
                    },
                    {
                        text: "Auto deployed the apps to Play market and AppStore using Fastlane",
                    },
                ],
                skills: [
                    {
                        icon: process.env.PUBLIC_URL + "/icons/react.svg",
                        name: "React-native",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/react.svg",
                        name: "React",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/js.svg",
                        name: "JavaScript",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/ts.svg",
                        name: "TypeScript",
                    },
                ],
            },
        ],
        communication: 6,
        technicalSkill: 9,
    },
    {
        id: 9,
        title: "The best developers only for you",
        name: "Farrukh N",
        comment:
            "Farrukh has 3.5 years of experience in React/React-Native software. Has developed more than 10 applications",
        salary: "$18 /h",
        aboutPerson: "",
        whereFrom: "Toshkent Uzbekistan",
        totalExperience: "3.5 Years Of Experience",
        expert: "Expert React-Native Developer",
        expertSkill: "React-Native",
        image: ASSETS.developer7,
        job: "Middle React-Native Developer",
        education: [
            {
                edu: "Tashkent university of information technologies",
                branch: "Computer Science and Engineering(CSE)",
            },
        ],
        strengths: [
            {
                item: "Excellent in frontend React apps",
            },
            {
                item: "Great communicator",
            },
            {
                item: "Good experience with new libraries like Next.js & Nuxt.js",
            },
        ],
        skills: [
            {
                id: 2,
                skillsIcon: process.env.PUBLIC_URL + "/icons/react.svg",
                skillsName: "React-Native",
                experience: "3.5 years",
                expertise: true,
            },
            {
                id: 3,
                skillsIcon: process.env.PUBLIC_URL + "/icons/react.svg",
                skillsName: "React",
                experience: "3 years",
                expertise: true,
            },
            {
                id: 4,
                skillsIcon: process.env.PUBLIC_URL + "/icons/js.svg",
                skillsName: "JS/TS",
                experience: "2 years",
                expertise: true,
            },
            {
                id: 5,
                skillsIcon: process.env.PUBLIC_URL + "/icons/css.svg",
                skillsName: "HTML/CSS",
                experience: "2 years",
                expertise: true,
            },
            {
                id: 6,
                skillsIcon: process.env.PUBLIC_URL + "/icons/firebase.svg",
                skillsName: "Firebase",
                experience: "1 years",
                expertise: true,
            },
        ],
        experience: [
            {
                title: "Software Engineer",
                type: "Agency",
                time: "3 year 3 months",
                info: [
                    {
                        text: "Responsible for full app life-cycle: design, build, test, deploy, release to the app store and play market.",
                    },
                    {
                        text: "Collaborating with the product management, marketing, designers, and technology and architecture teams.",
                    },
                    {
                        text: " Using external data sources and APIs.",
                    },
                ],
                skills: [
                    {
                        icon: process.env.PUBLIC_URL + "/icons/js.svg",
                        name: "JS",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/react.svg",
                        name: "React-Native",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/firebase.svg",
                        name: "Firebase",
                    },
                ],
            },
        ],
        communication: 6,
        technicalSkill: 9,
    },
    {
        id: 10,
        title: "The best developers only for you",
        name: "Fakhriddin Y",
        comment:
            "Farrukh has 3.5 years of experience in React/React-Native software. Has developed more than 10 applications",
        salary: "$28 /h",
        aboutPerson: "",
        whereFrom: "Toshkent Uzbekistan",
        totalExperience: "3.5 Years Of Experience",
        expert: "Expert React-Native Developer",
        expertSkill: "React-Native",
        image: ASSETS.developer9,
        job: "Middle React-Native Developer",
        education: [
            {
                edu: "Tashkent university of information technologies",
                branch: "Computer Science and Engineering(CSE)",
            },
        ],
        strengths: [
            {
                item: "Excellent in frontend React apps",
            },
            {
                item: "Great communicator",
            },
            {
                item: "Good experience with new libraries like Next.js & Nuxt.js",
            },
        ],
        skills: [
            {
                id: 2,
                skillsIcon: process.env.PUBLIC_URL + "/icons/react.svg",
                skillsName: "React-Native",
                experience: "3.5 years",
                expertise: true,
            },
            {
                id: 3,
                skillsIcon: process.env.PUBLIC_URL + "/icons/react.svg",
                skillsName: "React",
                experience: "3 years",
                expertise: true,
            },
            {
                id: 4,
                skillsIcon: process.env.PUBLIC_URL + "/icons/js.svg",
                skillsName: "JS/TS",
                experience: "2 years",
                expertise: true,
            },
            {
                id: 5,
                skillsIcon: process.env.PUBLIC_URL + "/icons/css.svg",
                skillsName: "HTML/CSS",
                experience: "2 years",
                expertise: true,
            },
            {
                id: 6,
                skillsIcon: process.env.PUBLIC_URL + "/icons/firebase.svg",
                skillsName: "Firebase",
                experience: "1 years",
                expertise: true,
            },
        ],
        experience: [
            {
                title: "Software Engineer",
                type: "Agency",
                time: "3 year 3 months",
                info: [
                    {
                        text: "Responsible for full app life-cycle: design, build, test, deploy, release to the app store and play market.",
                    },
                    {
                        text: "Collaborating with the product management, marketing, designers, and technology and architecture teams.",
                    },
                    {
                        text: " Using external data sources and APIs.",
                    },
                ],
                skills: [
                    {
                        icon: process.env.PUBLIC_URL + "/icons/js.svg",
                        name: "JS",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/react.svg",
                        name: "React-Native",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/firebase.svg",
                        name: "Firebase",
                    },
                ],
            },
        ],
        communication: 6,
        technicalSkill: 9,
    },
    {
        id: 11,
        title: "The best developers only for you",
        name: "Rustamov Jakhongir",
        comment: `I am an experienced Dart and Flutter developer with 1.5+ years of expertise in building robust and scalable mobile applications. My technical skills include Dart and Flutter, Git, REST API and Socket.io, Firebase, SOLID Principles, Material UI, Android SDK, Code Review, Locations.
            With a proven track record of delivering high-quality solutions, I excel in problem-solving and thrive in agile environments. My strong collaboration and communication skills make me an effective team player. I am dedicated to delivering projects on time, ensuring attention to detail and code quality.`,
        salary: "$20 /h",
        whereFrom: "Toshkent Uzbekistan",
        totalExperience: "1.5+ Years Of Experience",
        expert: "Expert Flutter Developer",
        expertSkill: "Flutter",
        image: ASSETS.developer11,
        job: "Mobile Developer",
        education: [
            {
                edu: "Tashkent University of Information Technologies",
                branch: "Software Engineering",
            },
        ],
        aboutPerson: "",
        strengths: [
            {
                item: "Creative approach",
            },
            {
                item: "Excellent in Flutter",
            },
            {
                item: "Teamwork and Adaptibilty",
            },
        ],
        skills: [
            {
                id: 1,
                skillsIcon: process.env.PUBLIC_URL + "/icons/flutter.svg",
                skillsName: "Flutter",
                experience: "1.5+ years",
                expertise: true,
            },
            {
                id: 2,
                skillsIcon: process.env.PUBLIC_URL + "/icons/dart.svg",
                skillsName: "Dart",
                experience: "1.5+ years",
                expertise: true,
            },

            {
                id: 3,
                skillsIcon: process.env.PUBLIC_URL + "/icons/firebase.svg",
                skillsName: "Firebase",
                experience: "1.5+ years",
                expertise: false,
            },
        ],
        experience: [
            {
                title: "Flutter developer",
                type: "IT-maker",
                time: "6 months",
                info: [
                    {
                        text: `Designed and developed the user interface of a Online Shop app using
    Flutter`,
                    },

                    {
                        text: `Implemented security measures to protect user data and transactions`,
                    },
                    {
                        text: `Collaborated with other members of the development team, including
    designers, back-end developers, and project managers, to ensure that the
    project is on track and meets the requirements`,
                    },
                    {
                        text: `Close communication with Back-end teams to achieve a more
                    preferable results`,
                    },

                    {
                        text: `Implementing app's features such as:
                    static and animated UIs elements
                    REST API back-end interaction
                    web-socket based features`,
                    },
                ],
                skills: [
                    {
                        icon: process.env.PUBLIC_URL + "/icons/flutter.svg",
                        name: "Flutter",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/dart.svg",
                        name: "Dart",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/firebase.svg",
                        name: "Firebase",
                    },
                ],
            },
            {
                title: "Flutter developer",
                type: "Empire-Soft",
                time: "1+ years",
                info: [
                    {
                        text: `Developed and maintained cross-platform mobile applications using
    React Native, Redux, and other modern technologies for iOS and Android`,
                    },
                    {
                        text: `Implemented complex UI components, animations, and user interactions
    following design guidelines and best practices`,
                    },
                    {
                        text: `Close communication with Back-end teams to achieve a more
                preferable results`,
                    },
                    {
                        text: `Wrote and maintained unit tests using Jest and Enzyme to ensure code
                stability and quality`,
                    },
                    {
                        text: `Participated in code reviews, providing and receiving constructive
                feedback to improve overall code quality`,
                    },
                    {
                        text: `Establishing a connection with the socket and fully working with it`,
                    },
                ],
                skills: [
                    {
                        icon: process.env.PUBLIC_URL + "/icons/flutter.svg",
                        name: "Flutter",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/dart.svg",
                        name: "Dart",
                    },
                    {
                        icon: process.env.PUBLIC_URL + "/icons/firebase.svg",
                        name: "Firebase",
                    },
                ],
            },
        ],
        communication: 9,
        technicalSkill: 9,
    },
];

export const ProgrammingLanguages: ProgrammingLanguagesType[] = [
    {
        id: 1,
        image: process.env.PUBLIC_URL + "/icons/react.svg",
        name: "React",
    },
    {
        id: 2,
        image: process.env.PUBLIC_URL + "/icons/android.svg",
        name: "Android",
    },
    {
        id: 3,
        image: process.env.PUBLIC_URL + "/icons/js.svg",
        name: "JS",
    },
    {
        id: 4,
        image: process.env.PUBLIC_URL + "/icons/flutter.svg",
        name: "Flutter",
    },
    {
        id: 5,
        image: process.env.PUBLIC_URL + "/icons/css.svg",
        name: "CSS",
    },
    {
        id: 6,
        image: process.env.PUBLIC_URL + "/icons/c++.svg",
        name: "C++",
    },
    {
        id: 7,
        image: process.env.PUBLIC_URL + "/icons/firebase.svg",
        name: "Firebase",
    },
    {
        id: 8,
        image: process.env.PUBLIC_URL + "/icons/nexticon.svg",
        name: "Next",
    },
    {
        id: 9,
        image: process.env.PUBLIC_URL + "/icons/ts.svg",
        name: "TS",
    },
    {
        id: 10,
        image: process.env.PUBLIC_URL + "/icons/java.svg",
        name: "Java",
    },
    {
        id: 10,
        image: process.env.PUBLIC_URL + "/icons/node.svg",
        name: "NodeJS",
    },
    {
        id: 11,
        image: process.env.PUBLIC_URL + "/icons/html.svg",
        name: "HTML",
    },
    {
        id: 12,
        image: process.env.PUBLIC_URL + "/icons/mongo.svg",
        name: "Mongo",
    },
    {
        id: 13,
        image: process.env.PUBLIC_URL + "/icons/ruby.svg",
        name: "Ruby",
    },
    {
        id: 13,
        image: process.env.PUBLIC_URL + "/icons/angular.svg",
        name: "Angular",
    },
];

export const WorkRate = [
    {
        id: 1,
        title: "full-time",
    },
    {
        id: 2,
        title: "long-term gig",
    },
    {
        id: 3,
        title: "part-time",
    },
    {
        id: 4,
        title: "gig",
    },
];

export const HowLong = [
    {
        id: 1,
        title: "More than 6 months",
    },
    {
        id: 2,
        title: "1-3 months",
    },
    {
        id: 3,
        title: "Less than 1 month",
    },
];

export const BlogData = [
    {
        id: 1,
        title: "Advantages of Hiring Software Engineers from Uzbekistan",
        text: `<h2>Introduction</h2>
        <p>
          The software development industry has witnessed tremendous growth globally, with a rising demand for skilled and talented engineers. One country that has emerged as a significant player in the field is Uzbekistan. Situated at the crossroads of Central Asia, Uzbekistan has quickly gained recognition for its pool of highly skilled software engineers. In this blog post, we will explore the advantages of hiring software engineers from Uzbekistan and why it is a smart choice for businesses looking to expand their technical teams.
        </p>
      
        <h2>1. Strong Technical Education</h2>
        <p>
          Uzbekistan places a strong emphasis on technical education, with a focus on computer science and engineering disciplines. The country boasts prestigious universities and institutions that provide comprehensive training in software development. Graduates from Uzbekistan possess a solid foundation in programming, algorithms, and data structures, making them well-equipped to tackle complex software challenges.
        </p>
      
        <h2>2. Technical Expertise</h2>
        <p>
          Uzbekistan's software engineers have gained recognition for their technical expertise and proficiency in a wide range of programming languages and technologies. Whether it's web development, mobile app development, artificial intelligence, or blockchain, engineers from Uzbekistan have demonstrated their ability to adapt and excel in various domains. Their strong technical acumen allows for faster onboarding and quick integration into existing development teams.
        </p>
      
        <h2>3. English Proficiency</h2>
        <p>
          Effective communication is crucial for successful collaboration within a globally distributed team. Uzbekistan has made significant strides in English language education, with a growing number of engineers possessing excellent English language skills. This proficiency in English enables seamless communication and minimizes language barriers, making it easier for businesses to engage with software engineers from Uzbekistan.
        </p>
      
        <h2>4. Cost-Effectiveness</h2>
        <p>
          When it comes to outsourcing software development or hiring remote teams, cost considerations are often a significant factor. Uzbekistan offers a favorable cost structure compared to other countries renowned for their software engineering talent. While still providing high-quality work, engineers from Uzbekistan often come at more affordable rates, offering a cost-effective solution for businesses looking to scale their development teams without compromising on quality.
        </p>
      
        <h2>5. Cultural Compatibility</h2>
        <p>
          Cultural compatibility is an often overlooked yet critical aspect of successful team collaboration. Uzbekistan shares cultural similarities with many Western countries, which facilitates smoother integration of software engineers into global teams. Their work ethics, professionalism, and respect for deadlines align well with international standards, ensuring a harmonious working relationship.
        </p>
      
        <h2>6. Time Zone Advantage</h2>
        <p>
          Uzbekistan operates within a favorable time zone, making it an ideal choice for businesses seeking overlap in working hours with their distributed teams. This time zone advantage allows for real-time communication, coordination, and prompt response to project requirements or issues. The ability to collaborate effectively without significant time differences enhances productivity and expedites project timelines.
        </p>
      
        <h2>7. Government Support and Infrastructure</h2>
        <p>
          The Uzbekistani government has recognized the potential of the software development industry and actively supports its growth. Investments in infrastructure, technology parks, and IT clusters have created a thriving ecosystem for software engineers to flourish. The government's initiatives, combined with a favorable business environment, have attracted major multinational companies to establish development centers in Uzbekistan.
        </p>
      
        <h2>8. Cultural and Intellectual Diversity</h2>
        <p>
          The software engineering talent pool in Uzbekistan is known for its diversity. Engineers from Uzbekistan bring unique perspectives and innovative approaches to problem-solving. The exposure to different cultural experiences enhances creativity and fosters out-of-the-box thinking, contributing to the overall success of software projects.
        </p>
      
        <h2>Conclusion</h2>
        <p>
          Hiring software engineers from Uzbekistan can provide businesses with numerous advantages. With a strong technical education system, a wide range of technical expertise, proficiency in English, cost-effectiveness, cultural compatibility, and favorable time zones, Uzbekistan has become an attractive destination for sourcing skilled software engineering talent. The combination of government support, infrastructure, and cultural diversity further strengthens the appeal of Uzbekistan as a reliable and strategic partner in software development. By considering the advantages highlighted in this blog post, businesses can tap into Uzbekistan's talent pool and elevate their software development capabilities to new heights.
        </p>`,
        date: "07.05.2023",
        image: "https://calbizjournal.com/wp-content/uploads/2022/08/software-engineers.jpg",
        infoImage:
            "https://calbizjournal.com/wp-content/uploads/2022/08/software-engineers.jpg",
    },
    {
        id: 1,
        title: "The Comprehensive Guide to Launching Your SaaS Startup: A Step-by-Step Process",
        text: `<h2>Introduction</h2>
    <p>The world of technology has witnessed a remarkable transformation with the rise of Software as a Service (SaaS) startups. These innovative ventures offer a range of software applications and services delivered over the internet, changing the way businesses and individuals interact with software. If you're considering venturing into the realm of SaaS, this comprehensive guide will walk you through the step-by-step process of starting your own SaaS startup.</p>
    
    <h2>1. Idea Generation and Market Research</h2>
    <p>Every successful SaaS startup begins with a solid idea that addresses a specific problem or need within a target market. Brainstorm ideas that stem from your expertise, industry knowledge, or personal experiences. Once you have a potential idea, conduct thorough market research to validate its viability. Identify your target audience, understand their pain points, and analyze your competitors. This research will provide insights into your product's unique value proposition and help you refine your idea.</p>
  
    <!-- More content... -->
  
    <h2>Conclusion</h2>
    <p>The journey of starting a SaaS startup is both challenging and rewarding. By following this comprehensive guide, you can navigate the intricate process from idea generation to successful launch. Remember, adaptability and responsiveness are key in the rapidly evolving SaaS landscape. Stay attuned to user feedback, market trends, and technological advancements to ensure your SaaS startup remains competitive and continues to deliver value to your customers.</p>
  `,
        date: "12.06.2023",
        image: "https://i0.wp.com/francescoarcieri.it/wp-content/uploads/2019/11/How-to-start-a-SaaS-startup.jpg?fit=700%2C368&ssl=1",
        infoImage:
            "https://i0.wp.com/francescoarcieri.it/wp-content/uploads/2019/11/How-to-start-a-SaaS-startup.jpg?fit=700%2C368&ssl=1",
    },
];

export const OurProcessData: OurProcessType[] = [
    {
        id: "01.",
        title: "discovery",
        text: "discovery_info",
    },
    {
        id: "02.",
        title: "plan",
        text: "plan_info",
    },
    {
        id: "03.",
        title: "execute",
        text: "execute_info",
    },
    {
        id: "04.",
        title: "deliver",
        text: "deliver_info",
    },
];

export const PrivacyPolicyData = {
    text: `<h1>Privacy Policy</h1>

    <p>Empire-soft.net ("Empire-soft", "we", or "us") is committed to protecting the privacy of our users. This privacy policy explains what information we collect, how we use it, and how we share it.</p>
  
    <h2>Information We Collect</h2>
  
    <p>We collect information from you in a variety of ways, including:</p>
  
    <ul>
      <li>When you visit our website, we collect your IP address, browser type, and operating system.</li>
      <li>When you contact us, we collect your name, email address, and any other information you provide.</li>
      <li>When you purchase a product or service from us, we collect your name, billing address, shipping address, and payment information.</li>
    </ul>
  
    <h2>How We Use Your Information</h2>
  
    <p>We use the information we collect to:</p>
  
    <ul>
      <li>Provide you with the products and services you have requested.</li>
      <li>Improve our website and services.</li>
      <li>Communicate with you about our products and services.</li>
      <li>Market our products and services to you.</li>
    </ul>
  
    <h2>How We Share Your Information</h2>
  
    <p>We may share your information with third-party service providers who help us operate our website and provide our products and services. We may also share your information with third-party marketing partners if you have given us permission to do so.</p>
  
    <p>We will not sell your information to third parties for their own marketing purposes without your permission.</p>
  
    <h2>Your Choices</h2>
  
    <p>You have a number of choices regarding the information we collect and how we use it. You can:</p>
  
    <ul>
      <li>Opt out of receiving marketing emails from us by clicking the unsubscribe link in any marketing email we send you.</li>
      <li>Request access to your personal information by contacting us at <a href="mailto:admin@empire-soft.net">admin@empire-soft.net</a>.</li>
      <li>Request that we delete your personal information by contacting us at <a href="mailto:admin@empire-soft.net">admin@empire-soft.net</a>.</li>
    </ul>
  
    <h2>Data Security</h2>
  
    <p>We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure. However, no security method is perfect, and we cannot guarantee the absolute security of your personal information.</p>
  
    <h2>Changes to This Privacy Policy</h2>
  
    <p>We may update this privacy policy from time to time. If we make any changes, we will post the updated privacy policy on our website.</p>
  
    <h2>Contact Us</h2>
  
    <p>If you have any questions about this privacy policy, please contact us at <a href="mailto:admin@empire-soft.net">admin@empire-soft.net</a>.</p>
  `,
};
