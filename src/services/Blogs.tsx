import { makeAutoObservable, toJS } from "mobx";

type blogsType = {
    id: number,
    title: string,
    text: string,
    date: string,
    image: string,
    infoImage: string
}

export default class BlogsStore {
    constructor() {
        makeAutoObservable(this)
    }

    blogsData: blogsType[] = []

    setBlogsinfo: boolean = false

    blogsInfo: blogsType = {
        id: 0,
        title: "",
        text: "",
        date: "",
        image: "",
        infoImage: ""
    }

    getBlogsInfo = (data: blogsType) => {
        this.blogsInfo = data
        this.setBlogsinfo = true
    }

    blogInfoExit = () => {
        this.setBlogsinfo = false
    }
}