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

const SubmitApp = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const { form, setForm, clearForm } = useRootStore().tagsStore;
    const { show, hide } = useRootStore().visibleStore;
    const data = `${form.name} submitted his application%0A Name: ${form.name}%0A Email: ${form.email}%0A He wants to contact us%0A`;

    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        if (event.target.value.length === 0) {
            setError(null);
            setDisabled(true);
        } else if (!isValidEmail(event.target.value)) {
            setError("Email is invalid" as never);
            setDisabled(true);
        } else {
            setError(null);
            setDisabled(false);
        }
        setForm(event.target.value, "email");
    };

    const sendBot = async () => {
        if (!disabled) {
            show("loading");
            await axios({
                method: "post",
                url: `https://api.telegram.org/bot6257527521:AAGKNc12U7SmVDG-ulTTcoP1BQxDeGCoS-4/sendMessage?chat_id=-1001934192696&text=${data}`,
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => {
                    hide("loading");
                    clearForm();
                    message.success(
                        "Thank you for contacting. We will reach you soon!"
                    );
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
                    text="Submit your application"
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
                        placeholder="Name Surname"
                        value={form.name}
                    />
                    <div>
                        <Input
                            placeholder="Email"
                            value={form.email}
                            type={"eanil"}
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
                    <div className={styles.submit}>
                        <ArrowRightButton
                            disabled={disabled}
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
