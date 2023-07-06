import React, { useState } from 'react'
import { UiIcon } from '../../assets/icons/Icons'
import RowItem from '../RowItem/RowItem'
import styles from "./OurServices.module.css"
import Text from '../Text/Text'
import ServiceCard from '../ServiceCard/ServiceCard'
import { ReviewsData, ServicesData } from '../../utils/dateBase'
import { ASSETS } from '../../utils/assetsRequires'
import { COLORS } from '../../utils/color'
import DevelopersCard from '../DevelopersCard/DevelopersCard'
import useRootStore from '../../Hooks/useRootStore'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'
import { ReviewDataType } from '../../types/types'

const FirstCard = observer(() => {
    const { show } = useRootStore().visibleStore
    const { setServiceSendMessage } = useRootStore().userStore
    const OpenForm = (name: string) => {
        show("writeToDev")
        setServiceSendMessage(name, "job")
    }
    return (
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
                )
            })}
        </div>
    )
})
const SecondCard = observer(() => {
    const { show } = useRootStore().visibleStore
    const { onViewProfile, getUserData } = useRootStore().userStore
    const Click = (id: number) => {
        show("viewProfile")
        getUserData(id)
    }
    return (
        <div className={styles.cardsBox}>
            {ReviewsData.map((e, index) => {
                return (
                    <DevelopersCard
                        key={index}
                        name={e.name}
                        data={e.skills}
                        job={e.job}
                        onPress={() => Click(e.id)}
                    />
                )
            })}
        </div>
    )
})

const router: {
    [key: string]: {
        component: React.FC
    }
} = {
    first: {
        component: FirstCard
    },
    second: {
        component: SecondCard
    }

}

const OurServices = () => {
    const [card, setCard] = useState<{
        component: React.FC
    }>(router.first)

    return (
        <div className={styles.container} id="services">
            <div className={styles.top}>
                <Text text='OUR SERVICES' textSize='forty' />
            </div>
            <div className={styles.tabBox}>
                <div className={styles.tabItem}
                    style={{
                        borderBottom: card === router.first ? "2px solid #1DAC87" : '2px solid transparent'
                    }}
                    onClick={() => setCard(router.first)}
                >
                    <Text
                        text='Services'
                        transform="uppercase"
                        textSize='twentyEight'
                        color={card === router.first ? COLORS.green : COLORS.grey}
                    />
                </div>
                <div className={styles.tabItem}
                    onClick={() => setCard(router.second)}
                    style={{
                        borderBottom: card === router.second ? "2px solid #1DAC87" : '2px solid transparent'
                    }}
                >
                    <Text
                        text="Developers for your business"
                        textSize='twentyEight'
                        transform="uppercase"
                        color={card === router.second ? COLORS.green : COLORS.grey}
                    />
                </div>
            </div>
            <card.component />
            <img className={styles.backOne} src={ASSETS.back3} alt="back" />
            <img className={styles.backTwo} src={ASSETS.back4} alt="back" />
        </div>
    )
}

export default observer(OurServices)
