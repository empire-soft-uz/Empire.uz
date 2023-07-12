import React from 'react'
import Text from '../Text/Text'
import styles from "./PersonAbout.module.css"
interface Props {
    title: string;
    name?: string;
    text: string;
    margin?: string;
    eduData?: any;
}

const PersonAbout: React.FC<Props> = ({
    title,
    name,
    text,
    margin,
    eduData,
}) => {
    return (
        <div className={styles.container} style={{
            margin: margin
        }}>
            {name ?
                <Text margin='0 0 10px 0' text={name} textSize={'twentyTwo'} /> : null
            }
            <div className={styles.eduBox}>
                {eduData ?

                    eduData.map((e: any, index: any) => {
                        return (
                            <div key={index}>
                                <Text text={e.edu} transform="uppercase" textSize={'eighteen'} />
                                <Text margin='3px 0 0 0' text={e.branch} textSize={'fourteen'} />
                            </div>
                        )
                    }) : null
                }
            </div>
            <Text text={title} transform="capitalize" textSize={'twentyTwo'} />
            <Text margin='5px 0 0 0' text={text} textSize={'fourteen'} />
        </div>
    )
}

export default PersonAbout
