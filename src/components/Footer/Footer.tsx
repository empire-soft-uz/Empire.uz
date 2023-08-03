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
            <div className={styles.logoBox}>
            <a href="/" className='href'>
                <img className={styles.logo} src="./icons/logo.svg" alt="Empire-soft" />
            </a>
            </div>
            <div className={styles.rightBox}>
                <a href="#services" className='href'>
                    <Text onPress={() => navigation("/#services")} textSize='sixteen' cursor='pointer' text='Services' color={COLORS.white} />
                </a>
                <a href="#our-developers" className='href'>
                    <Text onPress={() => navigation("/#our-developers")} textSize='sixteen' cursor='pointer' text='Developers' color={COLORS.white} />
                </a>
                <a href="#about-us" className='href'>
                    <Text onPress={() => navigation("/#about-us")} textSize='sixteen' cursor='pointer' text='About us' color={COLORS.white} />
                </a>
                {blog ?
                    <a onClick={OpenBlog} className='href'>
                        <Text textSize='sixteen' cursor='pointer' text='Blog' color={COLORS.white} />
                    </a> : null
                }
            </div>
            <div className={styles.social}>
                <a href="tel:+998994480500" className='href'>
                    <Text textSize='sixteen' cursor='pointer' text='+998 99 448 05 00' color={COLORS.green} />
                </a>
                <a target={"_blank"} href="mailto:empire.soft.net@gmail.com" className='href'>
                    <Text textSize='sixteen' cursor='pointer' text='Empire.soft.net@gmail.com' color={COLORS.green} />
                </a>
                <div className={styles.socialIconB}>
                    <a target={"_blank"} href="https://T.me/+998994480500" className='href'>
                        <img className={styles.socialIcon} src="/telegram.png" alt="" />        
                    </a>
                    <a target={"_blank"} href="" className='href'>
                        <img className={styles.socialIcon} src="/whatsapp.png" alt="" />
                    </a>
                </div>
            </div>
            <img className={styles.back} src={ASSETS.back6} />
        </div>
    )
}

export default Footer
