import { observer } from "mobx-react-lite";
import useRootStore from "../../hooks/useRootStore";
import { COLORS } from "../../utils/color";
import SkillIcon from "../SkillIcon/SkillIcon";
import Text from "../Text/Text";
import styles from "./Skills.module.css";

const Skills = () => {
  const { userData } = useRootStore().userStore;

  return (
    <div className={styles.container}>
      <div className={styles.skills}>
        <Text text="Skills" textSize="twentyTwo" />
        <Text
          margin="15px 0 0 0"
          text="Expertise"
          textSize="eighteen"
          color={COLORS.grey}
        />
        {userData.skills
          .filter((e) => !!e.expertise)
          .map((i, index) => {
            return (
              <div key={index} className={styles.itemsOne}>
                <SkillIcon
                  type="primary"
                  logo={i.skillsIcon}
                  name={i.skillsName}
                />
                <Text
                  textSize="fourteen"
                  color={COLORS.grey}
                  text={i.experience}
                />
              </div>
            );
          })}
      </div>
      <div className={styles.allSkills}>
        <Text text="All Skills" textSize="eighteen" color={COLORS.grey} />
        <div className={styles.itemsTwo}>
          {userData.skills.map((i, index) => {
            return (
              <SkillIcon
                key={index}
                logo={i.skillsIcon}
                name={i.skillsName}
                type="outline"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default observer(Skills);
