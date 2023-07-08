import _ from "lodash";
import { makeAutoObservable } from "mobx";

type modal = {
    findDeveloper: boolean
    smartMach: boolean
    weWillContact: boolean
    drawer: boolean
    calendly: boolean;
    loading: boolean;
    viewProfile: boolean;
    writeToDev: boolean;
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
        calendly: false,
        loading: false,
        viewProfile: false,
        writeToDev: false
    }

    show = (key: keyof modal) => {
        this.visiable[key] = true
        if (this.visiable[key] === true)
            document.body.style.overflow = 'hidden';

    }

    hide = (key: keyof modal) => {
        this.visiable[key] = false
        _.mapKeys(this.visiable, (value, key) => {
            if (value === false)
                document.body.style.overflow = 'auto';
            return
        })
    }

    toggle = (key: keyof modal) => {
        this.visiable[key] = !this.visiable[key]
    }

}