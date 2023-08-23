import { Backdrop } from "@mui/material";
import { message } from "antd";
import axios from "axios";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { CloseBig, CloseSmall } from "../../assets/icons/Icons";
import { isValidEmail } from "../../helper/ValidationHelper";
import useRootStore from "../../Hooks/useRootStore";
import { COLORS } from "../../utils/color";
import { ProgrammingLanguages } from "../../utils/dateBase";
import ArrowRightButton from "../ArrowRightButton/ArrowRightButton";
import CloseBtn from "../CloseBtn/CloseBtn";
import Input from "../Input/Input";
import PLanguage from "../PLangugae/PLanguage";
import Text from "../Text/Text";
import styles from "./FindDeveloper.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const FindDeveloper = () => {
    const { visiable, hide, show } = useRootStore().visibleStore;
    const {
        chooseTag,
        tags,
        removeTag,
        setfindDevForm,
        findDevForm,
        clearFindDevForm,
        form,
    } = useRootStore().tagsStore;

    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState(null);
    const { t } = useTranslation();

    const data = `${findDevForm.name} submitted his application%0A Name: ${findDevForm.name}%0A Email: ${findDevForm.email}%0A He wants to contact us%0A`;

    var emailData = {
        service_id: "service_8xjjilz",
        template_id: "template_72leqzf",
        user_id: "BeVa_hUxJ3jiw3zP2",
        template_params: {
            ...findDevForm,
        },
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        if (event.target.value.length === 0) {
            setError(null);
            setDisabled(true);
        } else if (event.target.value.length < 2) {
            setError(t("email_is_invalid") as never);
            setDisabled(true);
        } else {
            setError(null);
            setDisabled(false);
        }
        setfindDevForm(event.target.value, "email");
    };

    const next = async () => {
        if (disabled) {
            setError(t("email_is_invalid") as never);
            return;
        }
        if (!disabled) {
            show("smartMach");
            hide("findDeveloper");
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
                    message.success("thank_you");
                    setDisabled(true);
                })
                .catch((err) => {
                    message.error(`${err}`);
                });
        }
        if (visiable.smartMach === true)
            document.body.style.overflow = "hidden";
    };

    const closeFind = () => {
        hide("findDeveloper");
        if (visiable.findDeveloper === false)
            document.body.style.overflow = "auto";

        clearFindDevForm();
    };

    return (
        <>
            <Backdrop
                sx={{
                    color: "#fff",
                    zIndex: 6,
                    backgroundColor: "rgba(0,0,0, 0.8)",
                }}
                open={visiable.findDeveloper}
                onClick={closeFind}
            ></Backdrop>
            <div
                className={styles.container}
                style={{ display: visiable.findDeveloper ? "block" : "none" }}
            >
                <div className={styles.closeModal} onClick={closeFind}>
                    <CloseBtn icon={<IoCloseSharp size={24} />} />
                </div>
                <div className={styles.title}>
                    <Text
                        text="Time To Build The Future"
                        lineHeight={60}
                        textSize="fifty"
                    />
                </div>
                <div className={styles.blur}></div>
                <div className={styles.inputBox}>
                    <div className={styles.input}>
                        <Input
                            placeholder="Name"
                            value={findDevForm.name}
                            onChange={(e) =>
                                setfindDevForm(e.target.value, "name")
                            }
                        />
                    </div>
                    <div className={styles.input}>
                        <Input
                            placeholder="Work Email Address"
                            value={findDevForm.email}
                            onChange={handleChange}
                        />
                        <div className={styles.validation}>
                            {error ? (
                                <Text
                                    text={error}
                                    color={COLORS.red}
                                    textSize="fourteen"
                                />
                            ) : null}
                        </div>
                    </div>
                </div>
                <div className={styles.tabs}>
                    {tags.map((e, index) => {
                        return (
                            <div className={styles.item} key={index}>
                                <Text
                                    text={e.name}
                                    family="FuturaBook"
                                    textSize="twenty"
                                />
                                <div
                                    onClick={() => removeTag(e.id)}
                                    className={styles.close}
                                >
                                    <CloseSmall />
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className={styles.languagesBox}>
                    {ProgrammingLanguages.map((e, index) => {
                        return (
                            <PLanguage
                                key={index}
                                image={e.image}
                                name={e.name}
                                choosed={tags.every((item) => item.id !== e.id)}
                                onPress={() => chooseTag(e)}
                            />
                        );
                    })}
                </div>
                <div className={styles.footer}>
                    <ArrowRightButton onClick={next} />
                </div>
            </div>
        </>
    );
};

export default observer(FindDeveloper);
