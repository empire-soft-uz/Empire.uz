import React, { useEffect } from 'react'
import { ArrowBackIcon } from '../../assets/icons/Icons'
import useRootStore from '../../Hooks/useRootStore'
import { COLORS } from '../../utils/color'
import Text from '../Text/Text'
import styles from "./BlogInfo.module.css"
import AOS from "aos";
import "aos/dist/aos.css";

interface Props {
    imageUrl: string;
    date: string,
    title: string;
    text: string;
}

const BlogInfo: React.FC<Props> = ({
    date,
    imageUrl,
    text,
    title
}) => {
    const { blogInfoExit } = useRootStore().blogsStore
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className={styles.container} data-aos="fade-up"
            data-aos-duration="1500">
            <div
                onClick={blogInfoExit}
                style={{
                    padding: "15px 15px 15px 0",
                    cursor: "pointer"
                }}
            >
                <ArrowBackIcon />
            </div>
            <div className={styles.imageBox}>
                <img className={styles.img} src={imageUrl} />
                <div className={styles.date}>
                    <Text textSize='sixteen' text={date} />
                </div>
            </div>
            <div className={styles.textBox}>
                <Text margin='20px 0 0 0' textSize='twentyEight' text={title} />
                <Text margin='20px 0 0 0' color={COLORS.grey} family='FuturaBook' textSize='fourteen' text={text} />
            </div>
        </div>
    )
}

export default BlogInfo
