import { makeAutoObservable } from "mobx";

type modal = {
    findDeveloper: boolean
    smartMach: boolean
    weWillContact: boolean
    drawer: boolean
    calendly: boolean;
}

export default class VisibleStore {
    constructor() {
        makeAutoObservable(this)
    }

    visiable: modal = {
        findDeveloper: false,
        smartMach: false,
        weWillContact: false,
        drawer: false,
        calendly: false
    }

    show = (key: keyof modal) => {
        this.visiable[key] = true
    }

    hide = (key: keyof modal) => {
        this.visiable[key] = false
    }

    toggle = (key: keyof modal) => {
        this.visiable[key] = !this.visiable[key]
    }

}