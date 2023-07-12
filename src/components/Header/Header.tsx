import { Drawer } from 'antd'
import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { CloseSmall, MenuIcon } from '../../assets/icons/Icons'
import useRootStore from '../../Hooks/useRootStore'
import { APP_ROUTES } from '../../routes/app-routes'
import { COLORS } from '../../utils/color'
import Button from '../Button/Button'
import Text from '../Text/Text'
import styles from "./Header.module.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
interface Props {
    // servicesLink?: string;
}

const Header: React.FC<Props> = ({
    // servicesLink
}) => {
    const { show, hide, visiable } = useRootStore().visibleStore
    const navigation = useNavigate()
    const location = useLocation()
    const [small, setSmall] = useState(false);

    const closeDrawer = () => {
        hide("drawer")
    }
    const findDev = () => {
        show("findDeveloper")
        hide("drawer")
        if (visiable.findDeveloper === true)
            document.body.style.overflow = "hidden"
    }
    const showFindDev = () => {
        show("findDeveloper")
        if (visiable.findDeveloper === true)
            document.body.style.overflow = "hidden"
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setSmall(window.pageYOffset > 50)
            );
        }
    }, []);

    const OpenBlog = () => {
        if (location.pathname != "/blog")
            navigation(APP_ROUTES.BLOG)
    }

    return (
        <div className={`${styles.container} ${small ? styles.changeOn : styles.changeOff}`}>
            <a href="/" className='href'>
                <img className={styles.logo} src="./icons/logo.svg" alt="Empire-soft" />
            </a>
            <div className={styles.rightBox}>
                <a href="#services" className="href">
                    <Text onPress={() => navigation("/#services")} textSize='sixteen' cursor='pointer' text='Services' color={COLORS.white} />
                </a>
                <a href="#developers" className="href">
                    <Text onPress={() => navigation("/#developers")} textSize='sixteen' cursor='pointer' text='Developers' color={COLORS.white} />
                </a>
                <a href="#aboutus" className='href'>
                    <Text onPress={() => navigation("/#aboutus")} textSize='sixteen' cursor='pointer' text='About us' color={COLORS.white} />
                </a>
                <a className="href" onClick={OpenBlog}>
                    <Text textSize='sixteen' cursor='pointer' text='Blog' color={COLORS.white} />
                </a>
                <Button onPress={showFindDev} btnType='outline' title='FIND A DEVELOPER' titleColor={COLORS.green} />
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
                    marginTop: "20px"
                    // backgroundColor: "red"
                }}
                bodyStyle={{ padding: "0 0 0 50px" }}
                onClose={() => hide("drawer")}
                title={
                    <a href="/" className={`href ${styles.drawerLogo}`} onClick={closeDrawer}>
                        <img className={styles.logo} src="./icons/logo.svg" alt="Empire-soft" />
                    </a>
                }
                open={visiable.drawer}
                closeIcon={<CloseSmall />}
            >
                <a href="/#services" className="href" onClick={closeDrawer}>
                    <Text margin='20px 0 0 0' textSize='twentyTwo' cursor='pointer' text='Services' color={COLORS.white} />
                </a>
                <a href="/#about-us" className='href' onClick={closeDrawer}>
                    <Text margin='20px 0 0 0' textSize='twentyTwo' cursor='pointer' text='About us' color={COLORS.white} />
                </a>
                <a href="/blog" className='href' onClick={closeDrawer}>
                    <Text margin='20px 0 0 0' textSize='twentyTwo' cursor='pointer' text='Blog' color={COLORS.white} />
                </a>
                <div className={styles.btnBox}>
                    <Button margin='20px 0 0 0' onPress={findDev} btnType='outline' title='FIND A DEVELOPER' titleColor={COLORS.green} />
                </div>
            </Drawer>
        </div>
    )
}

export default observer(Header)
