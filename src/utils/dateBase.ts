import React, { FC } from "react";
import { Adventage, PhpIcon, UiIcon } from "../assets/icons/Icons";
import {
  AdventagesDataType,
  ProgrammingLanguagesType,
  ReviewDataType,
  ServicesDataType,
} from "../types/types";
import { ASSETS } from "./assetsRequires";

export const ServicesData: ServicesDataType[] = [
  {
    id: 1,
    name: "Mobile app development",
    text: "We can create a customized e-commerce solution that fits your business needs and helps you increase your online sales.",
    icon: UiIcon,
  },

  {
    id: 2,
    name: "Content Management System (CMS) Development",
    text: "The process, best practices and technologies used are both proven and practical.",
    icon: UiIcon,
  },
  {
    id: 3,
    name: "UI/UX Design",
    text: "We focus on creating intuitive and visually appealing user interfaces (UI) and user experiences (UX) to ensure your website is easy to use and engages your audience.",
    icon: UiIcon,
  },
  {
    id: 4,
    name: "Website Maintenance and Support",
    text: "We provide ongoing maintenance and support services to ensure your website stays up to date and secure, giving you peace of mind.",
    icon: UiIcon,
  },
  {
    id: 5,
    name: "Custom Software Development",
    text: "We can build customized software solutions that address your unique business needs and help you streamline your operations.",
    icon: UiIcon,
  },
  {
    id: 6,
    name: "Search Engine Marketing (SEM)",
    text: "Our SEM services include pay-per-click advertising campaigns and remarketing strategies to drive more traffic and conversions to your website.",
    icon: UiIcon,
  },
];

export const AdventagesData: AdventagesDataType[] = [
  {
    id: 1,
    name: "Streamlined Design Process",
    text: `Experience a seamless website creation journey with our streamlined design process. Our platform is tailored to ensure that you can effortlessly bring your vision to life, no matter your skill level. 
            We are always eager to hear your thoughts and ideas. Share your feedback and suggestions with us, and together we can create the perfect website for you.`,
    icon: Adventage,
  },

  {
    id: 2,
    name: "Personalized Customization",
    text: `Craft a distinctive online presence that reflects your unique style and personality. Our customizable templates and user-friendly tools empower you to create a website that showcases your individuality without any technical barriers.
            Take advantage of our versatile design features and make your website stand out from the crowd.`,
    icon: Adventage,
  },
  {
    id: 3,
    name: "Eco-conscious Approach",
    text: `Our team is dedicated to making a positive impact on the environment by minimizing our carbon footprint and promoting sustainable practices.
            By choosing to build your website with us, you are directly contributing to a greener future for our planet.`,
    icon: Adventage,
  },
  {
    id: 4,
    name: "Mobile-Friendly Design",
    text: `In today's digital landscape, mobile compatibility is key. Our platform ensures that your website looks great and functions smoothly on all devices, providing an optimal browsing experience for your visitors.
            Stay ahead of the curve with our mobile-responsive designs and tools.`,
    icon: Adventage,
  },
  {
    id: 5,
    name: "Robust Data Protection",
    text: `We take the security of your website and the privacy of your visitors very seriously. With over a decade of experience in the industry, we provide a reliable and secure solution that keeps your data safe.
            Rest easy knowing that your website and its data are protected by our state-of-the-art security measures.`,
    icon: Adventage,
  },
  {
    id: 6,
    name: "Attentive Customer Support",
    text: `Our dedicated customer support team is here to help you every step of the way. We believe in providing personalized, human assistance to ensure your website's success.
            When you create a website with us, you can count on our friendly and knowledgeable staff to guide you through the process and address any concerns you may have.`,
    icon: Adventage,
  },
];

export const ReviewsData: ReviewDataType[] = [
  {
    id: 1,
    title: "The best developers only for you",
    name: "Kamronbek Juraev    ",
    comment:
      "Kamronbek has more than 6 years of experience in software development. After graduating from INHA university he helped more than 20 startups to implement their ideas in the form of cross-platform mobile apps",
    salary: "$28 /h",
    whereFrom: "Toshkent Uzbekistan",
    totalExperience: "6+ Years Of Experience",
    expert: "Expert React-Native Developer",
    expertSkill: "React-Native",
    image: ASSETS.developer1,
    job: "Fullstack Developer",
    education: "INHA university in Tashkent",
    eduBranch: "Computer Science and Engineering(CSE)",
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
        skillsIcon: "./icons/react.svg",
        skillsName: "React-Native",
        experience: "6+ years",
        expertise: true,
      },
      {
        id: 2,
        skillsIcon: "./icons/react.svg",
        skillsName: "React",
        experience: "6+ years",
        expertise: true,
      },
      {
        id: 3,
        skillsIcon: "./icons/js.svg",
        skillsName: "Js/Ts",
        experience: "6+ years",
        expertise: true,
      },
      {
        id: 5,
        skillsIcon: "./icons/css.svg",
        skillsName: "Html/Css",
        experience: "4 years",
        expertise: false,
      },
      {
        id: 6,
        skillsIcon: "./icons/firebase.svg",
        skillsName: "Firebase",
        experience: "4 years",
        expertise: false,
      },
      {
        id: 6,
        skillsIcon: "./icons/node.svg",
        skillsName: "NodeJs",
        experience: "4 years",
        expertise: false,
      },
    ],
    experience: [
      {
        title: " React Native/React developer",
        type: "Freelance",
        time: "1 year 11 months",
        info: [
          {
            text: "Developed the entire frontend for a new ecommerce store.",
          },
          {
            text: "Built a modern ecommerce store in Next.js a React framework.",
          },
        ],
        skills: [
          {
            icon: "./icons/android.svg",
            name: "Android",
          },
          {
            icon: "./icons/js.svg",
            name: "Js",
          },
          {
            icon: "./icons/flutter.svg",
            name: "Flutter",
          },
          {
            icon: "./icons/css.svg",
            name: "Css",
          },
          {
            icon: "./icons/c++.svg",
            name: "C++",
          },
        ],
      },
      {
        title: "Freelance FullStack Developer",
        type: "Ecommerce",
        time: "1 year 4 months",
        info: [
          {
            text: "I have been a fullstack freelancer for several years and have over 10 projects completed.",
          },
        ],
        skills: [
          {
            icon: "./icons/android.svg",
            name: "Android",
          },
          {
            icon: "./icons/js.svg",
            name: "Js",
          },
          {
            icon: "./icons/flutter.svg",
            name: "Flutter",
          },
        ],
      },
      {
        title: "Senior Frontend Developer",
        type: "Banking",
        time: "8 months",
        info: [
          {
            text: "Lead development of the frontend of a banking application",
          },
        ],
        skills: [
          {
            icon: "./icons/react.svg",
            name: "React",
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
            icon: "./icons/php.svg",
            name: "Php",
          },
          {
            icon: "./icons/react.svg",
            name: "React",
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
    image: "./icons/react.svg",
    name: "React ",
  },
  {
    id: 2,
    image: "./icons/android.svg",
    name: "Android ",
  },
  {
    id: 3,
    image: "./icons/js.svg",
    name: "Js ",
  },
  {
    id: 4,
    image: "./icons/flutter.svg",
    name: "Flutter",
  },
  {
    id: 5,
    image: "./icons/css.svg",
    name: "Css",
  },
  {
    id: 6,
    image: "./icons/c++.svg",
    name: "C++",
  },
  {
    id: 7,
    image: "./icons/firebase.svg",
    name: "Firebase",
  },
  {
    id: 8,
    image: "./icons/nexticon.svg",
    name: "Next",
  },
  {
    id: 9,
    image: "./icons/ts.svg",
    name: "Ts",
  },
  {
    id: 10,
    image: "./icons/java.svg",
    name: "Java",
  },
  {
    id: 10,
    image: "./icons/node.svg",
    name: "Node Js",
  },
  {
    id: 11,
    image: "./icons/html.svg",
    name: "Html",
  },
  {
    id: 12,
    image: "./icons/mongo.svg",
    name: "Mongo",
  },
  {
    id: 13,
    image: "./icons/ruby.svg",
    name: "Ruby",
  },
  {
    id: 13,
    image: "./icons/angular.svg",
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
    text: `<h1>Advantages of Hiring Software Engineers from Uzbekistan</h1>

        <h2>Introduction</h2>
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
    image:
      "https://calbizjournal.com/wp-content/uploads/2022/08/software-engineers.jpg",
    infoImage:
      "https://calbizjournal.com/wp-content/uploads/2022/08/software-engineers.jpg",
  },
];
