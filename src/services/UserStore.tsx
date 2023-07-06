import { find } from "lodash";
import { makeAutoObservable } from "mobx";
import { ReviewDataInitial, ReviewDataType, ServiceSendDataInitial, ServiceSendDataType } from "../types/types";
import { ReviewsData } from "../utils/dateBase";

export class UserStore {
    currentId?: number;

    constructor() {
        makeAutoObservable(this)
    }


    userData: ReviewDataType = ReviewDataInitial

    onViewProfile = (item: ReviewDataType) => {
        this.userData = item
    }

    serviceSendData: ServiceSendDataType = ServiceSendDataInitial

    setServiceSendMessage = (value: string, key: keyof ServiceSendDataType) => {
        this.serviceSendData[key] = value as never
    }

    clearServiceSendDevForm = () => {
        this.serviceSendData = ServiceSendDataInitial
    }

    ServiceSendMessage = (item: ServiceSendDataType) => {
        this.serviceSendData = item
    }

    getUserData = (id: number) => {
        this.userData = find(ReviewsData, { id }) as ReviewDataType;
    }
}