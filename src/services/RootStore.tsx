import { makeAutoObservable } from "mobx";
import { createContext } from "react";
import TagStore from "./Tag";
import VisibleStore from "./VisibleStore";

export class AppRootStore {
    visibleStore = new VisibleStore()
    tagsStore = new TagStore()
    constructor() {
        makeAutoObservable(this)
    }
}

const rootStore = new AppRootStore()
export default createContext(rootStore)