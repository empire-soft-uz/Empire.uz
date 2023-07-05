import { makeAutoObservable } from "mobx";
import { ReviewDataInitial, ReviewDataType } from "../types/types";

export class UserStore {
    constructor() {
        makeAutoObservable(this)
    }
    userData: ReviewDataType = ReviewDataInitial

    onViewProfile = (item: ReviewDataType) => {
        this.userData = item
    }
}