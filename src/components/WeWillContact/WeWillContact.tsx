import React from "react";
// import { Backdrop } from "@mui/material";
// import { observer } from "mobx-react-lite";
// import { useTranslation } from "react-i18next";
// import useRootStore from "../../Hooks/useRootStore";
// import ArrowRightButton from "../ArrowRightButton/ArrowRightButton";
// import Text from "../Text/Text";
// import styles from "./WeWillContact.module.css";

// const WeWillContact = () => {
//     const { visiable, hide } = useRootStore().visibleStore;
//     const { t } = useTranslation();
//     const next = () => {
//         hide("findDeveloper");
//         hide("smartMach");
//         hide("weWillContact");
//         hide("writeToDev");
//         hide("viewProfile");
//         hide("calendly");
//         if (visiable.weWillContact === false)
//             document.body.style.overflow = "auto";
//     };

//     return (
//         <>
//             <Backdrop
//                 sx={{ color: "#fff", zIndex: 10 }}
//                 open={visiable.weWillContact}
//                 onClick={next}
//             ></Backdrop>
//             <div
//                 className={styles.container}
//                 style={{ display: visiable.weWillContact ? "block" : "none" }}
//             >
//                 <div className={styles.mediaCenter}>
//                     <div className={styles.title}>
//                         <Text
//                             text={t("thank_you")}
//                             lineHeight={40}
//                             textSize="forty"
//                         />
//                     </div>
//                     <div className={styles.blur}></div>
//                     <div className={styles.footer}>
//                         <ArrowRightButton onClick={next} />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default observer(WeWillContact);
