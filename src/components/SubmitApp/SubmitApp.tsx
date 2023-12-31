import { message } from "antd";
import axios from "axios";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { ArrowRight } from "../../assets/icons/Icons";
import { isValidEmail } from "../../helper/ValidationHelper";
import useRootStore from "../../Hooks/useRootStore";
import { ASSETS } from "../../utils/assetsRequires";
import { COLORS } from "../../utils/color";
import ArrowRightButton from "../ArrowRightButton/ArrowRightButton";
import Input from "../Input/Input";
import Text from "../Text/Text";
import styles from "./SubmitApp.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import i18n from "../../translations";
import PhoneInput, {
    formatPhoneNumber,
    formatPhoneNumberIntl,
    isValidPhoneNumber,
} from "react-phone-number-input";
import PhoneInputComp from "../PhoneInput/PhoneInput";

const SubmitApp = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const { t } = useTranslation();
    const { form, setForm, clearForm } = useRootStore().tagsStore;
    const { show, hide } = useRootStore().visibleStore;
    const navigation = useNavigate();
    const data = `${form.name} submitted his application%0A Name: ${form.name}%0A Email: ${form.email}%0A Phone number: ${form.pNumber}%0A He wants to contact us%0A`;

    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState(null);
    const [numberError, setNumberError] = useState(null);

    const onChangeNumber = (value: string) => {
        if (value && isValidPhoneNumber(value)) {
            setNumberError(null);
            setForm(value, "pNumber");
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
            ...form,
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
        setForm(event.target.value, "email");
    };

    const sendBot = async () => {
        if (disabled) {
            setError(t("email_is_invalid") as never);
            return;
        }
        if (isValidPhoneNumber(form.pNumber)) {
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
                    hide("loading");
                    setDisabled(true);
                    clearForm();
                    show("weWillContact");
                    navigation(`/${i18n.language}/thank-you`);
                    message.success(t("thank_you"));
                })
                .catch((err) => {
                    message.error(`${err}`);
                });
        }
    };

    return (
        <div className={styles.container} id="submit-app">
            <div
                className={styles.header}
                data-aos="fade-up"
                data-aos-duration="1500"
            >
                <Text
                    textAlign={"center"}
                    text={t("submit_your_app")}
                    family="BenzinBold"
                    transform={"uppercase"}
                    textSize="thirtySix"
                />
            </div>
            <div
                className={styles.content}
                data-aos="fade-up"
                data-aos-duration="1500"
            >
                <div className={styles.leftBox}>
                    <img src={ASSETS.man} />
                    <div className={styles.blur}></div>
                    <div className={styles.blurPerson}></div>
                </div>
                <div className={styles.rightBox}>
                    <Input
                        onChange={(e) => setForm(e.target.value, "name")}
                        placeholder={t("input_name")}
                        value={form.name}
                    />
                    <div>
                        <Input
                            placeholder={t("input_email")}
                            value={form.email}
                            type={"email"}
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
                    <div>
                        <PhoneInputComp
                            value={form.pNumber}
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
                    <div className={styles.submit}>
                        <ArrowRightButton
                            // disabled={disabled}
                            onClick={sendBot}
                        />
                    </div>
                </div>
            </div>
            <img
                data-aos="fade-down-right"
                data-aos-duration="1200"
                src={ASSETS.back2}
                className={styles.back}
            />
        </div>
    );
};

export default observer(SubmitApp);
