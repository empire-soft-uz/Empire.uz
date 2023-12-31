import _, { every } from "lodash";
import { makeAutoObservable, runInAction } from "mobx";

type modal = {
    findDeveloper: boolean;
    smartMach: boolean;
    weWillContact: boolean;
    drawer: boolean;
    calendly: boolean;
    loading: boolean;
    viewProfile: boolean;
    writeToDev: boolean;
    upBtn: boolean;
    social: boolean;
    initialLoading: boolean;
    languageDropdown: boolean;
    scroll: boolean;
};

export default class VisibleStore {
    constructor() {
        makeAutoObservable(this);
    }

    visiable: modal = {
        findDeveloper: false,
        smartMach: false,
        weWillContact: false,
        drawer: false,
        calendly: false,
        loading: false,
        viewProfile: false,
        writeToDev: false,
        upBtn: false,
        social: false,
        initialLoading: true,
        languageDropdown: false,
        scroll: false,
    };

    show = (key: keyof modal) => {
        runInAction(() => {
            this.visiable[key] = true;
        });
    };

    hide = (key: keyof modal) => {
        runInAction(() => {
            this.visiable[key] = false;
        });
    };

    toggle = (key: keyof modal) => {
        runInAction(() => {
            this.visiable[key] = !this.visiable[key];
        });
    };
}
