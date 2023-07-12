import React, { useEffect } from 'react'
import { ASSETS } from '../../utils/assetsRequires'
import { COLORS } from '../../utils/color'
import Button from '../Button/Button'
import Text from '../Text/Text'
import styles from "./Footer.module.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation, useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '../../routes/app-routes'
interface Props {
    blog?: boolean;
}

const Footer: React.FC<Props> = ({
    blog
}) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const navigation = useNavigate()
    const location = useLocation()
    const OpenBlog = () => {
        if (location.pathname != "/blog")
            navigation(APP_ROUTES.BLOG)
    }
    return (
        <div className={styles.container}>
            <a href="/" className='href'>
                <img className={styles.logo} src="./icons/logo.svg" alt="Empire-soft" />
            </a>
            <div className={styles.rightBox}>
                <a href="#services" className='href'>
                    <Text onPress={() => navigation("/#services")} textSize='sixteen' cursor='pointer' text='Services' color={COLORS.white} />
                </a>
                <a href="#aboutus" className='href'>
                    <Text onPress={() => navigation("/#aboutus")} textSize='sixteen' cursor='pointer' text='About us' color={COLORS.white} />
                </a>
                <a onClick={OpenBlog} className='href'>
                    <Text textSize='sixteen' cursor='pointer' text='Blog' color={COLORS.white} />
                </a>
            </div>
            <img data-aos="fade-down-bottom" data-aos-duration="1200" className={styles.back} src={ASSETS.back6} />
        </div>
    )
}

export default Footer
