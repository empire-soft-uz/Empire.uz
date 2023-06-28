import { makeAutoObservable, runInAction, toJS } from "mobx";

type tags = {
    id: number,
    name: string,
    image: string,
}

type work = {
    id: number,
    title: string
}

type findDevFormType = {
    name: string,
    workEmail: string,
    job: string;
    workRate: string;
    howLong: string;
    file: string;
    note: string;
    startDate: string
}

type formType = {
    name: string;
    email: string;
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


    findDevForm: findDevFormType = {
        name: '',
        workEmail: '',
        job: '',
        workRate: '',
        howLong: '',
        file: '',
        note: '',
        startDate: ''
    }

    findDeveloper = (item: findDevFormType) => {
        this.findDevForm = item
    }

    setfindDevForm = (value: string, key: keyof findDevFormType) => {
        this.findDevForm[key] = value as never
    }

    clearFindDevForm = () => {
        this.findDevForm = {
            name: '',
            workEmail: '',
            job: '',
            workRate: '',
            howLong: '',
            file: '',
            note: '',
            startDate: ''
        }
        this.tags = []
        this.howLong = {
            id: 0,
            title: ''
        }
        this.workRate = {
            id: 0,
            title: ''
        }
    }

    chooseTag = (item: tags) => {
        if (this.tags.some(i => i.id === item.id)) return;
        this.tags = [...this.tags, item]
        this.setfindDevForm(this.tags.map((e) => e.name).toString() as string, "job")
    }

    removeTag = (id: number) => {
        this.tags = this.tags.filter((e) => e.id !== id)
        this.setfindDevForm(this.tags.filter((e) => e.id !== id).map((e) => e.name).toString() as string, "job")
    }

    choseWorkRate = (item: work) => {
        this.workRate = item
        this.setfindDevForm(item.title, "workRate")
    }

    choseHowlong = (item: work) => {
        this.howLong = item
        this.setfindDevForm(item.title, "howLong")
    }

    form: formType = {
        name: '',
        email: ''
    }

    setForm = (value: string, key: keyof formType) => {
        this.form[key] = value as never
    }

    clearForm = () => {
        this.form = {
            name: '',
            email: ''
        }
    }

    validationForm: boolean = false;
    validationFormText: string = '';

    validation = () => {
        if (this.form.name === '') {
            runInAction(() => {
                this.validationForm = true;
            })
        }
        if (this.form.email === '') {
            runInAction(() => {
                this.validationForm = true;
            })
        } else {
            runInAction(() => {
                this.validationForm = false;
            })
        }
    }
}