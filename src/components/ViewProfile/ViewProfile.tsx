import React, { useRef } from "react";
import { Backdrop } from "@mui/material";
import { observer } from "mobx-react-lite";
import { CloseBig } from "../../assets/icons/Icons";
import useRootStore from "../../Hooks/useRootStore";
import { ReviewsData } from "../../utils/dateBase";
import Avatar from "../Avatar/Avatar";
import PersonAbout from "../PersonAbout/PersonAbout";
import ProfessionalExperience from "../ProfessionalExperience/ProfessionalExperience";
import Skills from "../Skills/Skills";
import ViewContent from "../ViewContent/ViewContent";
import styles from "./ViewProfile.module.css";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CloseBtn from "../CloseBtn/CloseBtn";
import { IoCloseSharp } from "react-icons/io5";
import Text from "../Text/Text";

const ViewProfile = () => {
    const outerDiv = useRef<HTMLDivElement>(null);
    const inerDiv = useRef<HTMLDivElement>(null);
    const router = useNavigate();
    const location = useLocation();
    const [currents, setCurrents] = useState(1);
    const { visiable, hide, show } = useRootStore().visibleStore;
    const { userData, getUserData } = useRootStore().userStore;
    const path = window.location;
    // const userId = Number(path.search.split("/")[1]);
    // useEffect(() => {
    //     if (userId) {
    //         show("viewProfile");
    //         getUserData(userId);
    //         document.body.style.overflow = "hidden";
    //     }
    // }, []);

    useEffect(() => {
        const outerWidth = outerDiv.current?.clientWidth;
        const inerWidth = inerDiv.current?.clientWidth;
    }, [ReviewsData]);

    const NextUser = (id: number) => {
        if (id < ReviewsData.length) {
            getUserData(userData.id + 1);
            router(`?programmer/${userData.id + 1}`);
        }

        if (ReviewsData.length > currents) {
            setCurrents(currents + 1);
            outerDiv.current?.scrollTo({
                left: inerDiv.current?.clientWidth! * currents,
                top: 0,
                behavior: "smooth",
            });
        }
    };
    const BackUser = (id: number) => {
        if (id > 1) {
            getUserData(userData.id - 1);
            router(`?programmer/${userData.id - 1}`);
        }
        if (!!currents) {
            setCurrents(currents - 1);

            outerDiv.current?.scrollTo({
                left:
                    -inerDiv.current?.clientWidth! +
                    inerDiv.current?.clientWidth! * currents -
                    200,
                top: 0,
                behavior: "smooth",
            });
        }
    };

    const ClickAvatarGetUser = (id: number) => {
        getUserData(id);
        router(`?programmer/${id}`);
    };

    const closeViewProfile = () => {
        hide("viewProfile");
        if (visiable.viewProfile === false)
            document.body.style.overflow = "auto";
        router(location.state, { replace: true });
    };

    return (
        <>
            <Backdrop
                sx={{
                    color: "#fff",
                    zIndex: 6,
                    backgroundColor: "rgba(0,0,0, 0.8)",
                }}
                open={visiable.viewProfile}
                onClick={closeViewProfile}
            ></Backdrop>
            <div
                className={styles.container}
                style={{ display: visiable.viewProfile ? "block" : "none" }}
            >
                <div className={styles.closeModal} onClick={closeViewProfile}>
                    <CloseBtn icon={<IoCloseSharp size={24} />} />
                </div>
                <div className={styles.pagination}>
                    <button
                        className={styles.arrow}
                        onClick={() => BackUser(userData?.id)}
                    >
                        {"<"}
                    </button>
                    <div className={styles.pageBox} ref={outerDiv}>
                        {ReviewsData.map((e, index) => {
                            return (
                                <div
                                    key={index}
                                    className={styles.avatarBox}
                                    ref={inerDiv}
                                >
                                    <Avatar
                                        active={e.id === userData?.id}
                                        onPress={() => ClickAvatarGetUser(e.id)}
                                        key={index}
                                        imageUrl={e?.image}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <button
                        className={styles.arrow}
                        onClick={() => NextUser(userData?.id)}
                    >
                        {">"}
                    </button>
                </div>
                <div className={styles.info}>
                    <div className={styles.leftBox}>
                        <ViewContent />
                        <Skills />
                    </div>
                    <div className={styles.rightBox}>
                        <PersonAbout
                            title={userData?.expert}
                            text={userData?.comment}
                        />
                        <ProfessionalExperience />
                        <PersonAbout
                            name="Education"
                            margin="30px 0 0 0"
                            eduData={userData?.education}
                            title={""}
                            text={""}
                        />
                        <PersonAbout
                            margin="30px 0 0 0"
                            title={"About Me"}
                            text={userData?.aboutPerson}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default observer(ViewProfile);
