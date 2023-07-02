import React from "react";
import { Adventage, PhpIcon, UiIcon } from "../assets/icons/Icons";
import { ASSETS } from "./assetsRequires";

export const ServicesData : {
    id: number,
    name: string,
    text: string,
    icon: React.FC
}[] = [
    {
        id: 1,
        name: "Mobile app development",
        text: "We can create a customized e-commerce solution that fits your business needs and helps you increase your online sales.",
        icon: UiIcon
    },
        
    {
        id: 2,
        name: "Content Management System (CMS) Development",
        text: "The process, best practices and technologies used are both proven and practical.",
        icon: UiIcon
    },
    {
        id: 3,
        name: "UI/UX Design",
        text: "We focus on creating intuitive and visually appealing user interfaces (UI) and user experiences (UX) to ensure your website is easy to use and engages your audience.",
        icon: UiIcon
    },
    {
        id: 4,
        name: "Website Maintenance and Support",
        text: "We provide ongoing maintenance and support services to ensure your website stays up to date and secure, giving you peace of mind.",
        icon: UiIcon
    },
    {
        id: 5,
        name: "Custom Software Development",
        text: "We can build customized software solutions that address your unique business needs and help you streamline your operations.",
        icon: UiIcon
    },
    {
        id: 6,
        name: "Search Engine Marketing (SEM)",
        text: "Our SEM services include pay-per-click advertising campaigns and remarketing strategies to drive more traffic and conversions to your website.",
        icon: UiIcon
    },
    ]

export const AdventagesData : {
    id: number,
    name: string,
    text: string,
    icon: React.FC
}[] = [
    {
        id: 1,
        name: "Streamlined Design Process",
        text: "Experience a seamless website creation journey with our streamlined design process. Our platform is tailored to ensure that you can effortlessly bring your vision to life, no matter your skill level. 
            We are always eager to hear your thoughts and ideas. Share your feedback and suggestions with us, and together we can create the perfect website for you.",
        icon: Adventage
    },
        
    {
        id: 2,
        name: "Personalized Customization",
        text: "Craft a distinctive online presence that reflects your unique style and personality. Our customizable templates and user-friendly tools empower you to create a website that showcases your individuality without any technical barriers.
            Take advantage of our versatile design features and make your website stand out from the crowd.",
        icon: Adventage
    },
    {
        id: 3,
        name: "Eco-conscious Approach",
        text: "Our team is dedicated to making a positive impact on the environment by minimizing our carbon footprint and promoting sustainable practices.
            By choosing to build your website with us, you are directly contributing to a greener future for our planet.",
        icon: Adventage
    },
    {
        id: 4,
        name: "Mobile-Friendly Design",
        text: "In today's digital landscape, mobile compatibility is key. Our platform ensures that your website looks great and functions smoothly on all devices, providing an optimal browsing experience for your visitors.
            Stay ahead of the curve with our mobile-responsive designs and tools.",
        icon: Adventage
    },
    {
        id: 5,
        name: "Robust Data Protection",
        text: "We take the security of your website and the privacy of your visitors very seriously. With over a decade of experience in the industry, we provide a reliable and secure solution that keeps your data safe.
            Rest easy knowing that your website and its data are protected by our state-of-the-art security measures.",
        icon: Adventage
    },
    {
        id: 6,
        name: "Attentive Customer Support",
        text: "Our dedicated customer support team is here to help you every step of the way. We believe in providing personalized, human assistance to ensure your website's success.
            When you create a website with us, you can count on our friendly and knowledgeable staff to guide you through the process and address any concerns you may have.",
        icon: Adventage
    },
    ]

export const ReviewsData :{
    id: number,
    title: string,
    name: string,
    comment: string,
    image: string,
    job: string,
    skillsIcon: React.FC,
    skillsName: string
}[] = [
    {
        id: 1,
        title: "The best developers only for you",
        name: "Raphael Roytman",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: ASSETS.roytman,
        job: "Fullstack Developer",
        skillsIcon: PhpIcon,
        skillsName: "Php",
        },
    {
        id: 2,
        title: "The best developers only for you",
        name: "Raphael Roytman",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        image: ASSETS.roytman,
        job: "Fullstack Developer",
        skillsIcon: PhpIcon,
        skillsName: "Php",
        },
    {
        id: 3,
        title: "The best developers only for you",
        name: "Raphael Roytman",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: ASSETS.roytman,
        job: "Fullstack Developer",
         skillsIcon: PhpIcon,
        skillsName: "Php",
        },
    {
        id: 4,
        title: "The best developers only for you",
        name: "Raphael Roytman",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: ASSETS.roytman,
        job: "Fullstack Developer",
         skillsIcon: PhpIcon,
        skillsName: "Php",
        },
    {
        id: 5,
        title: "The best developers only for you",
        name: "Raphael Roytman",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        image: ASSETS.roytman,
        job: "Fullstack Developer",
         skillsIcon: PhpIcon,
        skillsName: "Php",
        },
    {
        id: 6,
        title: "The best developers only for you",
        name: "Raphael Roytman",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: ASSETS.roytman,
        job: "Fullstack Developer",
         skillsIcon: PhpIcon,
        skillsName: "Php",
    },
    ]

export const ProgrammingLanguages:{
    id: number,
    image: string,
    name: string,
}[] = [
    {
        id: 1,
        image: "./icons/react.svg",
        name: "React "
    },
    {
        id: 2,
        image: "./icons/android.svg",
        name: "Android "
    },
    {
        id: 3,
        image: "./icons/js.svg",
        name: "Js "
    },
    {
        id: 4,
        image: "./icons/flutter.svg",
        name: "Flutter "
    },
    {
        id: 5,
        image: "./icons/css.svg",
        name: "Css "
    },
    {
        id: 6,
        image: "./icons/c++.svg",
        name: "C++ "
    },
    {
        id: 7,
        image: "./icons/firebase.svg",
        name: "Firebase "
    },
    {
        id: 8,
        image: "./icons/nexticon.svg",
        name: "Next "
    },
    {
        id: 9,
        image: "./icons/ts.svg",
        name: "Ts "
    },
    {
        id: 10,
        image: "./icons/java.svg",
        name: "Java "
    },
    {
        id: 10,
        image: "./icons/node.svg",
        name: "Node Js "
    },
    {
        id: 11,
        image: "./icons/html.svg",
        name: "Html "
    },
    {
        id: 12,
        image: "./icons/mongo.svg",
        name: "Mongo "
    },
    {
        id: 13,
        image: "./icons/ruby.svg",
        name: "Ruby "
    },
    {
        id: 13,
        image: "./icons/angular.svg",
        name: "Angular "
    },
]

export const WorkRate = [
    {
        id: 1,
        title: "full-time"
    },
    {
        id: 2,
        title: "long-term gig"
    },
    {
        id: 3,
        title: "part-time"
    },
    {
        id: 4,
        title: "gig"
    },
]

export const HowLong = [
    {
        id: 1,
        title: "More than 6 months"
    },
    {
        id: 2,
        title: "1-3 months"
    },
    {
        id: 3,
        title: "Less than 1 month"
    },
]

export const BlogData = [
    {
        id: 1,
        title: 'Как наружняя реклама влияет на потребителя',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: '01.02',
        image: ASSETS.blog2,
        infoImage: ASSETS.bloginfo
    },
    {
        id: 2,
        title: 'Как наружняя реклама влияет на потребителя',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: '01.02',
        image: ASSETS.blog1,
        infoImage: ASSETS.bloginfo
    },
    {
        id: 3,
        title: 'Как наружняя реклама влияет на потребителя',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: '01.02',
        image: ASSETS.blog2,
        infoImage: ASSETS.bloginfo
    },
    {
        id: 4,
        title: 'Как наружняя реклама влияет на потребителя',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: '01.02',
        image: ASSETS.blog1,
        infoImage: ASSETS.bloginfo
    },
    {
        id: 5,
        title: 'Как наружняя реклама влияет на потребителя',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: '01.02',
        image: ASSETS.blog2,
        infoImage: ASSETS.bloginfo
    },
    {
        id: 6,
        title: 'Как наружняя реклама влияет на потребителя',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: '01.02',
        image: ASSETS.blog1,
        infoImage: ASSETS.bloginfo
    },
    {
        id: 7,
        title: 'Как наружняя реклама влияет на потребителя',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: '01.02',
        image: ASSETS.blog2,
        infoImage: ASSETS.bloginfo
    },
    {
        id: 8,
        title: 'Как наружняя реклама влияет на потребителя',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: '01.02',
        image: ASSETS.blog1,
        infoImage: ASSETS.bloginfo
    },
    {
        id: 9,
        title: 'Как наружняя реклама влияет на потребителя',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: '01.02',
        image: ASSETS.blog2,
        infoImage: ASSETS.bloginfo
    },
]
