export type ReviewDataType = {
    id: number;
    title: string;
    name: string;
    comment: string;
    salary: string;
    aboutPerson: string;
    whereFrom: string;
    totalExperience: string;
    expert: string;
    expertSkill: string;
    image: string;
    job: string;
    education: {
        edu: string;
        branch: string;
    }[];
    communication: number;
    technicalSkill: number;
    strengths: {
        item: string;
    }[];
    skills: {
        id: number;
        skillsIcon: string;
        skillsName: string;
        experience: string;
        expertise: boolean;
    }[];
    experience: {
        title: string;
        type: string;
        time: string;
        info: {
            text: string;
        }[];
        skills: {
            icon: string;
            name: string;
        }[];
    }[];
};
export const ReviewDataInitial = {
    id: 0,
    title: "",
    name: "",
    comment: "",
    salary: "",
    aboutPerson: "",
    whereFrom: "",
    totalExperience: "",
    expert: "",
    expertSkill: "",
    image: "",
    job: "",
    education: [
        {
            edu: "",
            branch: "",
        },
    ],
    communication: 0,
    technicalSkill: 0,
    strengths: [
        {
            item: "",
        },
    ],
    skills: [
        {
            id: 0,
            skillsIcon: "",
            skillsName: "",
            experience: "",
            expertise: false,
        },
    ],
    experience: [
        {
            title: "",
            type: "",
            time: "",
            info: [
                {
                    text: "",
                },
            ],
            skills: [
                {
                    icon: "",
                    name: "",
                },
            ],
        },
    ],
};

export type ProgrammingLanguagesType = {
    id: number;
    image: string;
    name: string;
};

export type AdventagesDataType = {
    id: number;
    name: string;
    text: string;
    icon: string;
};
export type ServicesDataType = {
    id: number;
    name: string;
    text: string;
    icon: string;
};
export type ServiceSendDataType = {
    id: number;
    job: string;
    name: string;
    email: string;
};
export const ServiceSendDataInitial = {
    id: 0,
    job: "",
    name: "",
    email: "",
};
export type OurProcessType = {
    id: string;
    title: string;
    text: string;
};
export const OurProcessInitial = {
    id: "",
    title: "",
    text: "",
};
