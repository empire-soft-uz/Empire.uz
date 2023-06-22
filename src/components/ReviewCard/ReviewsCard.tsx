import React from 'react'
import { ASSETS } from '../../utils/assetsRequires'
import { COLORS } from '../../utils/color'
import RowItem from '../RowItem/RowItem'
import Text from '../Text/Text'
import styles from "./ReviewsCard.module.css"

interface Props {
    title: string;
    comment: string;
    name: string;
    job?: string;
    image?: string;
}

const ReviewsCard: React.FC<Props> = ({
    title,
    comment,
    image,
    job,
    name
}) => {
    return (
        <div className={styles.container}>
            <Text text={title} transform={"uppercase"} size={22} />
            <Text family='FuturaBook' color={COLORS.grey} text={comment} />
            <RowItem imageUrl={image} text={name} comment={job} />
        </div>
    )
}

export default ReviewsCard
