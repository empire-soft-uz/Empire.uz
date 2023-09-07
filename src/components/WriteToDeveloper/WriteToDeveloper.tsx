import { Backdrop } from "@mui/material";
import { message } from "antd";
import axios from "axios";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { CloseBig, CloseSmall } from "../../assets/icons/Icons";
import { isValidEmail } from "../../helper/ValidationHelper";
import useRootStore from "../../Hooks/useRootStore";
import { COLORS } from "../../utils/color";
import ArrowRightButton from "../ArrowRightButton/ArrowRightButton";
import CloseBtn from "../CloseBtn/CloseBtn";
import Input from "../Input/Input";
import Text from "../Text/Text";
import styles from "./WriteToDeveloper.module.css";
import { IoCloseSharp } from "react-icons/io5";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import i18n from "../../translations";
import { useNavigate } from "react-router-dom";
import PhoneInputComp from "../PhoneInput/PhoneInput";
import PhoneInput, {
    formatPhoneNumber,
    formatPhoneNumberIntl,
    isValidPhoneNumber,
} from "react-phone-number-input";
const WriteToDeveloper = () => {
    const { visiable, hide, show } = useRootStore().visibleStore;
    const { setServiceSendMessage, serviceSendData, clearServiceSendDevForm } =
        useRootStore().userStore;
    const navigation = useNavigate();

    const data = `Services%0A Name: ${serviceSendData.name}%0A Email: ${serviceSendData.email}%0A Phone Number: ${serviceSendData.pNumber}%0A To: ${serviceSendData.job}`;
    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState(null);
    const [nameError, setNameError] = useState(null);
    const [numberError, setNumberError] = useState(null);
    const { t } = useTranslation();

    const onChangeNumber = (value: string) => {
        if (value && isValidPhoneNumber(value)) {
            setNumberError(null);
            setServiceSendMessage(value, "pNumber");
        } else {
            setNumberError(t("number_is_invalid") as never);
            return;
        }
    };

    var emailData = {
        service_id: "service_8xjjilz",
        template_id: "template_72leqzf",
        user_id: "BeVa_hUxJ3jiw3zP2",
        template_params: {
            ...serviceSendData,
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
        setServiceSendMessage(event.target.value, "email");
    };
    const sendBot = async () => {
        if (disabled) {
            setError(t("email_is_invalid") as never);
            return;
        }
        if (isValidPhoneNumber(serviceSendData.pNumber)) {
            setNumberError(null);
        } else {
            setNumberError(t("number_is_invalid") as never);
            return;
        }
        if (!disabled) {
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
                    clearServiceSendDevForm();
                    setDisabled(true);
                    hide("writeToDev");
                    hide("loading");
                    navigation(`/${i18n.language}/thank-you`);
                    show("weWillContact");
                    message.success(t("thank_you"));
                })
                .catch((err) => {
                    message.error(`${err}`);
                    hide("loading");
                });
        } else {
            message.error(t("email_is_invalid"));
            hide("loading");
        }
    };
    const closeModal = () => {
        hide("writeToDev");
        clearServiceSendDevForm();
        setError(null);
        if (visiable.writeToDev === false)
            document.body.style.overflow = "auto";
    };

    return (
        <>
            <Backdrop
                sx={{
                    color: "#fff",
                    zIndex: 8,
                    backgroundColor: "rgba(0,0,0, 0.8)",
                }}
                open={visiable.writeToDev}
                onClick={closeModal}
            ></Backdrop>
            <div
                className={styles.container}
                style={{ display: visiable.writeToDev ? "block" : "none" }}
            >
                <div className={styles.closeModal} onClick={closeModal}>
                    <CloseBtn icon={<IoCloseSharp size={24} />} />
                </div>
                <div className={styles.mediaCenter}>
                    <div className={styles.mediaTop}>
                        <div className={styles.title}>
                            <Text
                                text={t(`contact_us_via`)}
                                textSize={"twenty"}
                            />
                        </div>
                        <div className={styles.socialIconB}>
                            <a
                                target={"_blank"}
                                href="https://T.me/+998994480500"
                                className={`${styles.link} href`}
                            >
                                <div className={styles.telegram}>
                                    <img
                                        className={styles.socialIcon}
                                        src="/telegram.png"
                                        alt=""
                                    />
                                    <Text
                                        text={"Telegram"}
                                        textSize={"twenty"}
                                    />
                                </div>
                            </a>
                            <a
                                target={"_blank"}
                                href="https://wa.me/+998994480500"
                                className={`${styles.link} href`}
                            >
                                <div className={styles.whatsApp}>
                                    <img
                                        className={styles.socialIcon}
                                        src="/whatsapp.png"
                                        alt=""
                                    />
                                    <Text
                                        text={"Whatsapp"}
                                        textSize={"twenty"}
                                    />
                                </div>
                            </a>
                        </div>
                        <div className={styles.orText}>
                            <Text text={"or"} textSize={"thirtySix"} />
                        </div>
                    </div>
                    <span className={styles.line}></span>
                    <div className={styles.mediaBottom}>
                        <Text
                            text={t(serviceSendData.job)}
                            textSize={"twenty"}
                        />
                        <div className={styles.title}>
                            <div>
                                <Input
                                    value={serviceSendData.name}
                                    onChange={(e) =>
                                        setServiceSendMessage(
                                            e.target.value,
                                            "name"
                                        )
                                    }
                                    placeholder={t("input_name")}
                                />
                                <div className={styles.validation}>
                                    {nameError ? (
                                        <Text
                                            text={nameError}
                                            color={COLORS.red}
                                            textSize="fourteen"
                                        />
                                    ) : null}
                                </div>
                            </div>
                            <div>
                                <Input
                                    type="email"
                                    value={serviceSendData.email}
                                    onChange={handleChange}
                                    placeholder={t("input_email")}
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
                            <div>
                                <PhoneInputComp
                                    value={serviceSendData.pNumber}
                                    onChange={(e) => onChangeNumber(e)}
                                />
                                <div className={styles.validation}>
                                    {numberError ? (
                                        <Text
                                            text={numberError}
                                            color={COLORS.red}
                                            textSize="fourteen"
                                        />
                                    ) : null}
                                </div>
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <Button
                                // disabled={disabled}
                                onPress={sendBot}
                                title={t("submit_your_app")}
                                btnType={"outline"}
                                width={"100%"}
                                padding="5px 0"
                                titleSize="18px"
                                margin="10px 0 0 0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default observer(WriteToDeveloper);
