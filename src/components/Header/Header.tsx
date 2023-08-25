import { Drawer } from "antd";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { CloseSmall, MenuIcon } from "../../assets/icons/Icons";
import useRootStore from "../../Hooks/useRootStore";
import { APP_ROUTES } from "../../routes/app-routes";
import { COLORS } from "../../utils/color";
import Button from "../Button/Button";
import Text from "../Text/Text";
import styles from "./Header.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Translation from "../Translation/Translation";
import { useTranslation } from "react-i18next";
import i18n from "../../translations";
interface Props {}

const Header: React.FC<Props> = ({}) => {
    const { show, hide, visiable } = useRootStore().visibleStore;
    const navigation = useNavigate();
    const location = useLocation();
    // const [small, setSmall] = useState(false);
    const { t } = useTranslation();

    const closeDrawer = () => {
        hide("drawer");
    };
    const findDev = () => {
        show("findDeveloper");
        hide("drawer");
        if (visiable.findDeveloper === true)
            document.body.style.overflow = "hidden";
    };
    const showFindDev = () => {
        show("findDeveloper");
        if (visiable.findDeveloper === true)
            document.body.style.overflow = "hidden";
    };

    useEffect(() => {
        if (location.pathname == `/${i18n.language}/developers`) show("scroll");
        if (location.pathname == `/${i18n.language}/blog`) show("scroll");
        if (location.pathname != `/${i18n.language}/developers`) {
            window.addEventListener("scroll", () => {
                if (window.pageYOffset > 30) show("scroll");
            });
        }
        if (window.location.pathname != `/${i18n.language}/blog`) {
            window.addEventListener("scroll", () => {
                if (window.pageYOffset > 30) show("scroll");
            });
        }
    }, []);

    const OpenBlog = () => {
        hide("drawer");
        navigation(`/${i18n.language}/blog`);
    };

    return (
        <div
            className={`${styles.container} ${
                visiable.scroll ? styles.changeOn : styles.changeOff
            }`}
        >
            <a href={`/${i18n.language}`} className="href">
                <img
                    className={styles.logo}
                    src={process.env.PUBLIC_URL + "/logo1.png"}
                    alt="Empire-soft"
                />
            </a>
            <div className={styles.rightBox}>
                <a href="#services" className="href">
                    <Text
                        onPress={() => navigation(`/${i18n.language}#services`)}
                        textSize="sixteen"
                        cursor="pointer"
                        text={t("services")}
                        color={COLORS.white}
                    />
                </a>
                <a href="#our-developers" className="href">
                    <Text
                        onPress={() =>
                            navigation(`/${i18n.language}#our-developers`)
                        }
                        textSize="sixteen"
                        cursor="pointer"
                        text={t("developers")}
                        color={COLORS.white}
                    />
                </a>
                <a href="#about-us" className="href">
                    <Text
                        onPress={() => navigation(`/${i18n.language}#about-us`)}
                        textSize="sixteen"
                        cursor="pointer"
                        text={t("about_us")}
                        color={COLORS.white}
                    />
                </a>
                <a className="href" onClick={OpenBlog}>
                    <Text
                        textSize="sixteen"
                        cursor="pointer"
                        text={t("blog")}
                        color={COLORS.white}
                    />
                </a>
                <Translation />
                <Button
                    onPress={showFindDev}
                    btnType="outline"
                    title={t("find_a_developer")}
                    titleColor={COLORS.green}
                />
            </div>
            <div className={styles.drawer}>
                <div onClick={() => show("drawer")}>
                    <MenuIcon />
                </div>
            </div>
            <Drawer
                width={"72vw"}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    // textAlign: "center",
                    backgroundColor: "#010100",
                    color: "#fff",
                }}
                headerStyle={{
                    justifyContent: "flex-start",
                    height: "8vh",
                    marginTop: "20px",
                    // backgroundColor: "red"
                }}
                bodyStyle={{ padding: "0 0 0 50px" }}
                onClose={() => hide("drawer")}
                title={
                    <a
                        href="/"
                        className={`href ${styles.drawerLogo}`}
                        onClick={closeDrawer}
                    >
                        <img
                            className={styles.logo}
                            src={process.env.PUBLIC_URL + "/logo1.png"}
                            alt="Empire-soft"
                        />
                    </a>
                }
                open={visiable.drawer}
                closeIcon={<CloseSmall />}
            >
                <a href="#services" className="href" onClick={closeDrawer}>
                    <Text
                        onPress={() => navigation(`/${i18n.language}#services`)}
                        margin="20px 0 0 0"
                        textSize="twentyTwo"
                        cursor="pointer"
                        text={t("services")}
                        color={COLORS.white}
                    />
                </a>
                <a
                    href="#our-developers"
                    className="href"
                    onClick={closeDrawer}
                >
                    <Text
                        onPress={() =>
                            navigation(`/${i18n.language}#our-developers`)
                        }
                        margin="20px 0 0 0"
                        textSize="twentyTwo"
                        cursor="pointer"
                        text={t("developers")}
                        color={COLORS.white}
                    />
                </a>
                <a href="#about-us" className="href" onClick={closeDrawer}>
                    <Text
                        onPress={() => navigation(`/${i18n.language}#about-us`)}
                        margin="20px 0 0 0"
                        textSize="twentyTwo"
                        cursor="pointer"
                        text={t("about_us")}
                        color={COLORS.white}
                    />
                </a>
                <a className="href" onClick={OpenBlog}>
                    <Text
                        margin="20px 0 0 0"
                        textSize="twentyTwo"
                        cursor="pointer"
                        text={t("blog")}
                        color={COLORS.white}
                    />
                </a>
                <div style={{ marginTop: "20px" }}>
                    <Translation />
                </div>
                <div className={styles.btnBox}>
                    <Button
                        margin="20px 0 0 0"
                        onPress={findDev}
                        btnType="outline"
                        title={t("find_a_developer")}
                        titleColor={COLORS.green}
                    />
                </div>
            </Drawer>
        </div>
    );
};

export default observer(Header);
