import React from 'react'
import { ReviewsData } from '../../utils/dateBase'
import ReviewsCard from '../ReviewCard/ReviewsCard'
import Text from '../Text/Text'
import styles from "./Reviews.module.css"
import _ from 'lodash'
import { ASSETS } from '../../utils/assetsRequires'

const Reviews = () => {

    const row1Data = ReviewsData.filter((_, i) => i % 4 === 0)
    const row2Data = ReviewsData.filter((_, i) => i % 4 === 1)
    const row3Data = ReviewsData.filter((_, i) => i % 4 === 2)


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Text text='Reviews about us' transform={"uppercase"} textSize='forty' />
            </div>
            <div className={styles.cardsBox}>
                <div className={styles.cards} >
                    {
                        row1Data.map((e, i) => (
                            <ReviewsCard
                                key={i}
                                title={e.title}
                                comment={e.comment}
                                name={e.name}
                                image={e.image}
                                job={e.job}
                            />
                        ))
                    }
                </div>
                <div className={styles.cards}>
                    {
                        row2Data.map((e, i) => (
                            <ReviewsCard
                                key={i}
                                title={e.title}
                                comment={e.comment}
                                name={e.name}
                                image={e.image}
                                job={e.job}
                            />
                        ))
                    }
                </div>
                <div className={styles.cards}>
                    {
                        row3Data.map((e, i) => (
                            <ReviewsCard
                                key={i}
                                title={e.title}
                                comment={e.comment}
                                name={e.name}
                                image={e.image}
                                job={e.job}
                            />
                        ))
                    }
                </div>
                <img className={styles.back1} src={ASSETS.back3} />
                <img className={styles.back2} src={ASSETS.back3} />
            </div>
        </div>
    )
}

export default Reviews
