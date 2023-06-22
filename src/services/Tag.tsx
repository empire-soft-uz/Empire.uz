import { makeAutoObservable, toJS } from "mobx";

type tags = {
    id: number,
    name: string,
    image: string
}

type work = {
    id: number,
    title: string
}

export default class TagStore {
    constructor() {
        makeAutoObservable(this)
    }

    tags: tags[] = []

    workRate: work = {
        id: 0,
        title: ""
    }
    howLong: work = {
        id: 0,
        title: ""
    }


    chooseTag = (item: tags) => {
        if (this.tags.some(i => i.id === item.id)) return;
        this.tags = [...this.tags, item]
    }

    removeTag = (id: number) => {
        this.tags = this.tags.filter((e) => e.id !== id)
    }

    choseWorkRate = (item: work) => {
        this.workRate = item
    }
    choseHowlong = (item: work) => {
        this.howLong = item
    }
}