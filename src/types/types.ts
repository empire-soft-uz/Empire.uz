export type ReviewDataType = {
    id: number,
    title: string,
    name: string,
    comment: string,
    salary: string,
    whereFrom: string,
    totalExperience: string,
    expert: string;
    expertSkill: string;
    image: string,
    job: string,
    education: string,
    eduBranch: string,
    result: string,
    strengths: {
        item: string,
    }[],
    skills: {
        id: number,
        skillsIcon: string,
        skillsName: string,
        experience: string,
        expertise: boolean,
    }[]
    experience: {
        title: string
        type: string,
        time: string,
        info: {
            text: string
        }[],
        skills: {
            icon: string
            name: string
        }[]
    }[],
}
export const ReviewDataInitial = {
    id: 0,
    title: "",
    name: "",
    comment: "",
    salary: "",
    whereFrom: "",
    totalExperience: "",
    expert: "",
    expertSkill: "",
    image: "",
    job: "",
    education: "",
    eduBranch: "",
    result: "",
    strengths: [{
        item: "",
    }],
    skills: [{
        id: 0,
        skillsIcon: "",
        skillsName: "",
        experience: "",
        expertise: false,
    }],
    experience: [{
        title: "",
        type: "",
        time: "",
        info: [{
            text: ""
        }],
        skills: [{
            icon: "",
            name: ""
        }]
    }],
}

export type ProgrammingLanguagesType = {
    id: number,
    image: string,
    name: string,   
}

export type AdventagesDataType = {
    id: number,
    name: string,
    text: string,
    icon: React.FC
}
export type ServicesDataType = {
    id: number,
    name: string,
    text: string,
    icon: React.FC
}