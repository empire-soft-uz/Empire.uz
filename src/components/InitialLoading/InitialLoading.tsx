import React from "react";
import { Backdrop } from "@mui/material";
import { observer } from "mobx-react-lite";
import useRootStore from "../../Hooks/useRootStore";
import Lottie from "react-lottie";
import animationData from "./codingLoading.json";

const InitialLoading = () => {
    const { visiable, hide } = useRootStore().visibleStore;
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <Backdrop
            sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
                backgroundColor: "#000",
                flexDirection: "column",
                gap: "1rem",
            }}
            open={visiable.initialLoading}
        >
            <Lottie options={defaultOptions} height={400} width={400} />
        </Backdrop>
    );
};

export default observer(InitialLoading);
