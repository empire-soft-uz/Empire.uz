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
        name: "UX / UI Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        icon: UiIcon
    },
        
    {
        id: 2,
        name: "UX / UI Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        icon: UiIcon
    },
    {
        id: 3,
        name: "UX / UI Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        icon: UiIcon
    },
    {
        id: 4,
        name: "UX / UI Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        icon: UiIcon
    },
    {
        id: 5,
        name: "UX / UI Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        icon: UiIcon
    },
    {
        id: 6,
        name: "UX / UI Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
        name: "QUALITY",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        icon: Adventage
    },
        
    {
        id: 2,
        name: "QUALITY",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        icon: Adventage
    },
    {
        id: 3,
        name: "QUALITY",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        icon: Adventage
    },
    {
        id: 4,
        name: "QUALITY",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        icon: Adventage
    },
    {
        id: 5,
        name: "QUALITY",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        icon: Adventage
    },
    {
        id: 6,
        name: "QUALITY",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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