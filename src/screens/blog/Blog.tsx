import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import BlogCard from '../../components/BlogCard/BlogCard'
import BlogCardTwo from '../../components/BlogCardTwo/BlogCardTwo'
import BlogInfo from '../../components/BlogInfo/BlogInfo'
import Calendly from '../../components/Calendly/Calendly'
import FindDeveloper from '../../components/FindDeveloper/FindDeveloper'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Loading from '../../components/Loading/Loading'
import StartMach from '../../components/StartMach/StartMach'
import Text from '../../components/Text/Text'
import WeWillContact from '../../components/WeWillContact/WeWillContact'
import useRootStore from '../../Hooks/useRootStore'
import { ASSETS } from '../../utils/assetsRequires'
import { BlogData } from '../../utils/dateBase'
import styles from './Blog.module.css'
import AOS from "aos";
import "aos/dist/aos.css";
import WriteToDeveloper from '../../components/WriteToDeveloper/WriteToDeveloper'

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const Blog = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const { getBlogsInfo, blogsInfo, setBlogsinfo } = useRootStore().blogsStore
    return (
        <>
            <Header />
            <div className={styles.container} id="blog">
                <div className={styles.content} data-aos="fade-up"
                    data-aos-duration="1500">
                    {setBlogsinfo ? <BlogInfo
                        date={blogsInfo.date ? "" : ""}
                        imageUrl={blogsInfo.infoImage}
                        title={blogsInfo.title}
                        text={blogsInfo.text}
                    /> :
                        <>
                            <Text text='Blog' family='FuturaBold' transform={"uppercase"} textSize="forty" />
                            <div className={styles.cards}>
                                {BlogData.map((e, index) => {
                                    return index % 2 === 0 ? (
                                        <BlogCard date={e.date} text={e.title} image={e.image} key={index} onPress={() => getBlogsInfo(e)} />
                                    ) : (
                                        <BlogCardTwo image={e.image} text={e.title} date={e.date} key={index} onPress={() => getBlogsInfo(e)} />
                                    )
                                })}
                            </div>
                        </>
                    }
                </div>
                <img data-aos="fade-down-left" data-aos-duration="1200" className={styles.backOne} src={ASSETS.back1} alt="back" />
                <img data-aos="fade-down-right" data-aos-duration="1200" className={styles.backTwo} src={ASSETS.back2} alt="back" />
            </div>
            <div className={styles.footer}>
                <Footer blog={false} />
            </div>
            <FindDeveloper />
            <StartMach />
            <Calendly />
            <WeWillContact />
            <WriteToDeveloper />
            <Loading />
        </>
    )
}

export default observer(Blog)
