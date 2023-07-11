import React, { useEffect, useState } from "react";
import { UiIcon } from "../../assets/icons/Icons";
import RowItem from "../RowItem/RowItem";
import styles from "./OurServices.module.css";
import Text from "../Text/Text";
import ServiceCard from "../ServiceCard/ServiceCard";
import { ReviewsData, ServicesData } from "../../utils/dateBase";
import { ASSETS } from "../../utils/assetsRequires";
import { COLORS } from "../../utils/color";
import DevelopersCard from "../DevelopersCard/DevelopersCard";
import useRootStore from "../../Hooks/useRootStore";
import { observer } from "mobx-react-lite";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

const OurServices = () => {
  const { show, visiable } = useRootStore().visibleStore;
  const { setServiceSendMessage } = useRootStore().userStore;
  const OpenForm = (name: string) => {
    show("writeToDev");
    setServiceSendMessage(name, "job");
    if (visiable.writeToDev === true)
      document.body.style.overflow = "hidden"
  };
  return (
    <div className={styles.container} id="services">
      <div className={styles.top}>
        <Fade cascade>
          <Text text="OUR SERVICES" textAlign={"center"} family="BenzinBold" textSize="thirtySix" />
        </Fade>
      </div>
      <Fade className={styles.fade}>
        <div className={styles.cardsBox}>
          {ServicesData.map((e, index) => {
            return (
              <ServiceCard
                key={index}
                name={e.name}
                text={e.text}
                icon={e.icon}
                onPress={() => OpenForm(e.name)}
              />
            );
          })}
        </div>
      </Fade>
      <img className={styles.backOne} src={ASSETS.back3} alt="back" />
      <img className={styles.backTwo} src={ASSETS.back4} alt="back" />
    </div>
  );
};

export default observer(OurServices);
