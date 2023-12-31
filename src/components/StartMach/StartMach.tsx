import { Backdrop, CircularProgress } from "@mui/material";
import { DatePicker, message } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import {
    ArrowBackIcon,
    CloseSmall,
    FileUpload,
    PlusIcon,
} from "../../assets/icons/Icons";
import useRootStore from "../../Hooks/useRootStore";
import { storage } from "../../services/Firebase";
import { COLORS } from "../../utils/color";
import { HowLong, WorkRate } from "../../utils/dateBase";
import ArrowRightButton from "../ArrowRightButton/ArrowRightButton";
import Button from "../Button/Button";
import Text from "../Text/Text";
import styles from "./StartMach.module.css";
import dayjs, { Dayjs } from "dayjs";
import { FormatDate } from "../../helper/datePicker";
import { toJS } from "mobx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import i18n from "../../translations";
import { useTranslation } from "react-i18next";

const StartMach = () => {
    const { visiable, hide, show } = useRootStore().visibleStore;
    const {
        choseWorkRate,
        workRate,
        choseHowlong,
        howLong,
        findDevForm,
        setfindDevForm,
        clearFindDevForm,
    } = useRootStore().tagsStore;
    const navigation = useNavigate();
    const { t } = useTranslation();

    const disabledDate: RangePickerProps["disabledDate"] = (current) => {
        return current && current < dayjs().endOf("day");
    };
    const data = `Time To Build The Future%0A Name: ${findDevForm.name}%0A Work email: ${findDevForm.email}%0A Skills: ${findDevForm.job}%0A Work Rate: ${findDevForm.workRate}%0A How Long: ${findDevForm.howLong}%0A Note: ${findDevForm.note}%0A Start Date: ${findDevForm.startDate}%0A File: ${findDevForm.file}%0A`;

    var emailData = {
        service_id: "service_8xjjilz",
        template_id: "template_72leqzf",
        user_id: "BeVa_hUxJ3jiw3zP2",
        template_params: {
            ...findDevForm,
        },
    };
    const sendBot = async () => {
        show("loading");
        await axios({
            method: "post",
            url: "https://api.emailjs.com/api/v1.0/email/send",
            data: emailData,
            headers: {
                "Content-Type": "application/json",
            },
        });
        await axios({
            method: "post",
            url: `https://api.telegram.org/bot6257527521:AAGKNc12U7SmVDG-ulTTcoP1BQxDeGCoS-4/sendMessage?chat_id=-1001934192696&text=${data}`,
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                hide("smartMach");
                hide("loading");
                clearFindDevForm();
                hideStartMatch();
                navigation(`/${i18n.language}/thank-you`);
                show("weWillContact");
                message.success(t("thank_you"));
            })
            .catch((err) => {
                message.error(`${err}`);
                hide("loading");
            });
    };

    const hideStartMatch = () => {
        hide("smartMach");
        if (visiable.smartMach === false) document.body.style.overflow = "auto";
        clearFindDevForm();
    };

    const [file, setFile] = useState<File | null>(null);
    const [url, setUrl] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const uploadFile = () => {
        if (file == null) return;
        setUrl("Uploading file..."); // Show a message indicating the file upload is in progress
        const uploadTask = storage.ref(`files/${file.name}`).put(file as never);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                setLoading(true);
            },
            (error) => {
                message.error(error.message);
            },
            () => {
                storage
                    .ref("files")
                    .child(file.name)
                    .getDownloadURL()
                    .then((downloadURL) => {
                        setUrl(downloadURL); // Update the state with the obtained URL
                        setfindDevForm(encodeURI(downloadURL), "file");
                        setLoading(false);
                        message.success("File uploaded successfully");
                    })
                    .catch((error) => {
                        message.error(error);
                    });
            }
        );
    };

    return (
        <>
            <Backdrop
                sx={{ color: "#fff", zIndex: 5 }}
                open={visiable.smartMach}
                // onClick={hideStartMatch}
            ></Backdrop>
            <div
                className={styles.container}
                style={{ display: visiable.smartMach ? "block" : "none" }}
            >
                <div className={styles.title}>
                    <Text
                        text="START MACHING NOW!"
                        lineHeight={60}
                        textSize="fifty"
                    />
                </div>
                <div className={styles.blur}></div>
                <div className={styles.work}>
                    <Text
                        text="Work Rate"
                        color={COLORS.grey}
                        textSize="eighteen"
                        family="FuturaBook"
                    />
                    <div className={styles.categoryTime}>
                        {WorkRate.map((e, index) => {
                            return (
                                <button
                                    style={{
                                        border:
                                            workRate.id === e.id
                                                ? "1px solid #1DAC87"
                                                : "1px solid #2E2E2E",
                                        color:
                                            workRate.id === e.id
                                                ? "#1DAC87"
                                                : "#7F7F7F",
                                    }}
                                    onClick={() => choseWorkRate(e)}
                                    key={index}
                                    className={styles.btn}
                                >
                                    {e.title}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className={styles.developer}>
                    <Text
                        text="How Long Will You Need This Developer?"
                        color={COLORS.grey}
                        textSize="eighteen"
                        family="FuturaBook"
                    />
                    <div className={styles.categoryTime}>
                        {HowLong.map((e, index) => {
                            return (
                                <button
                                    style={{
                                        border:
                                            howLong.id === e.id
                                                ? "1px solid #1DAC87"
                                                : "1px solid #2E2E2E",
                                        color:
                                            howLong.id === e.id
                                                ? "#1DAC87"
                                                : "#7F7F7F",
                                    }}
                                    key={index}
                                    onClick={() => choseHowlong(e)}
                                    className={styles.btn}
                                >
                                    {e.title}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className={styles.developer}>
                    <div className={styles.upload}>
                        <label className={styles.label}>
                            <Text
                                text="Files"
                                color={COLORS.grey}
                                textSize="eighteen"
                                family="FuturaBook"
                            />
                            <FileUpload />
                            <input
                                className={styles.fileInput}
                                type="file"
                                onChange={(e: any) => {
                                    setFile(e.target.files[0]);
                                }}
                            />
                        </label>
                        {loading ? (
                            <CircularProgress
                                size={24}
                                style={{
                                    marginRight: "10px",
                                    color: "#1DAC87",
                                }}
                            />
                        ) : file ? (
                            <div className={styles.links}>
                                <a
                                    className={styles.href}
                                    target={"_blank"}
                                    href={url}
                                >
                                    {file.name.length >= 17
                                        ? `${file.name.slice(0, 14)} ...`
                                        : file.name}
                                </a>
                                <div
                                    onClick={() => setFile(null)}
                                    style={{
                                        padding: "6px 6px 6px 0",
                                        cursor: "pointer",
                                    }}
                                >
                                    <CloseSmall />
                                </div>
                            </div>
                        ) : null}
                        <Button
                            disabled={file ? false : true}
                            onPress={uploadFile}
                            titleSize={"12px"}
                            title="upload"
                            btnType="primary"
                            padding="5px 10px"
                        />
                    </div>
                    <div className={styles.notesBox}>
                        <textarea
                            rows={4}
                            className={styles.notes}
                            placeholder="Note something"
                            value={findDevForm.note}
                            onChange={(e) =>
                                setfindDevForm(e.target.value, "note")
                            }
                        />
                    </div>
                </div>
                <div className={styles.dateBox}>
                    <DatePicker
                        style={{
                            backgroundColor: "#1DAC87",
                            color: "#fff",
                            border: "none",
                        }}
                        placeholder="Start date"
                        disabledDate={disabledDate}
                        onChange={(value) =>
                            setfindDevForm(
                                FormatDate(value as never),
                                "startDate"
                            )
                        }
                    />
                </div>
                <div className={styles.footer}>
                    <ArrowRightButton
                        disabled={
                            findDevForm.workRate.length === 0 &&
                            findDevForm.howLong.length === 0 &&
                            findDevForm.startDate.length === 0
                                ? true
                                : false
                        }
                        onClick={sendBot}
                    />
                </div>
            </div>
        </>
    );
};

export default observer(StartMach);
