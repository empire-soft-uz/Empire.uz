import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { ArrowDown, WorldIcon } from "../../assets/icons/Icons";
import useRootStore from "../../Hooks/useRootStore";
import i18n from "../../translations";
import styles from "./Translation.module.css";
import { MdLanguage } from "react-icons/md";
import { generatePath, useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../routes/app-routes";

const Translation = () => {
    const { hide, visiable, toggle } = useRootStore().visibleStore;
    const navigate = useNavigate();
    const path = window.location.pathname.slice(1, 3);

    const lngs = [
        {
            name: "en",
            url: "en",
            icon: "/en.png",
        },
        {
            name: "ru",
            url: "ru",
            icon: "/ru.png",
        },
        {
            name: "uz",
            url: "uz",
            icon: "/uz.png",
        },
    ];

    const onCloseModal = (e: any) => {
        i18n.changeLanguage(e.name);
        hide("languageDropdown");
        navigate(`/${e.name}`);
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
                    <p>{path}</p>
                </button>
            </div>
            {visiable.languageDropdown ? (
                <div className={styles.languageModal}>
                    {lngs.map((item, index) => {
                        return (
                            <button
                                key={index}
                                className={styles.languageBtnModal}
                                onClick={() => onCloseModal(item)}
                            >
                                <img width={20} src={item.icon} alt="" />
                                <p>{item.name}</p>
                            </button>
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
};

export default observer(Translation);
