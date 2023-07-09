import { observer } from 'mobx-react-lite'
import React from 'react'
import BlogCard from '../../components/BlogCard/BlogCard'
import BlogCardTwo from '../../components/BlogCardTwo/BlogCardTwo'
import BlogInfo from '../../components/BlogInfo/BlogInfo'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Text from '../../components/Text/Text'
import useRootStore from '../../hooks/useRootStore'
import { ASSETS } from '../../utils/assetsRequires'
import { BlogData } from '../../utils/dateBase'
import styles from './Blog.module.css'

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
    const { getBlogsInfo, blogsInfo, setBlogsinfo } = useRootStore().blogsStore
    return (
        <>
            <Header />
            <div className={styles.container} id="blog">
                <div className={styles.content}>
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
                <img className={styles.backOne} src={ASSETS.back1} alt="back" />
                <img className={styles.backTwo} src={ASSETS.back2} alt="back" />
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </>
    )
}

export default observer(Blog)
