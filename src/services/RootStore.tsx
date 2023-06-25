import { makeAutoObservable } from "mobx";
import { createContext } from "react";
import BlogsStore from "./Blogs";
import TagStore from "./Tag";
import VisibleStore from "./VisibleStore";

export class AppRootStore {
    visibleStore = new VisibleStore()
    tagsStore = new TagStore()
    blogsStore = new BlogsStore()
    constructor() {
        makeAutoObservable(this)
    }
}

const rootStore = new AppRootStore()
export default createContext(rootStore)