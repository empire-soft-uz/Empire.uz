import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { ArrowDown, WorldIcon } from "../../assets/icons/Icons";
import useRootStore from "../../Hooks/useRootStore";
import i18n from "../../translations";
import styles from "./Translation.module.css";
import { MdLanguage } from "react-icons/md";

const Translation = () => {
    const { hide, visiable, toggle } = useRootStore().visibleStore;

    const onCloseModal = (name: string) => {
        i18n.changeLanguage(name);
        hide("languageDropdown");
    };
    return (
        <div className={styles.container}>
            <div
                className={styles.language}
                style={{
                    borderRadius: visiable.languageDropdown
                        ? "6px 6px 0 0"
                        : "6px",
                }}
                onClick={() => toggle("languageDropdown")}
            >
                <MdLanguage className={styles.worldIcon} size={30} />
                <button className={styles.languageBtn}>
                    <p>{i18n.language}</p>
                </button>
            </div>
            {visiable.languageDropdown ? (
                <div className={styles.languageModal}>
                    <button
                        className={styles.languageBtnModal}
                        onClick={() => onCloseModal("en")}
                    >
                        <img width={20} src="/en.png" alt="" />
                        <p>en</p>
                    </button>
                    <button
                        className={styles.languageBtnModal}
                        onClick={() => onCloseModal("uz")}
                    >
                        <img width={20} src="/uz.png" alt="" />
                        <p>uz</p>
                    </button>
                    <button
                        className={styles.languageBtnModal}
                        onClick={() => onCloseModal("ru")}
                    >
                        <img width={20} src="/ru.png" alt="" />
                        <p>ru</p>
                    </button>
                </div>
            ) : null}
        </div>
    );
};

export default observer(Translation);
