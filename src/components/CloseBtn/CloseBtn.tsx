import React from 'react'
import { styled } from 'styled-components';
interface Props {
    onPress?: () => void;
    icon: any;
}

const CloseBtn: React.FC<Props> = ({
    onPress,
    icon
}) => {
    return (
        <Contianer>
            <button onClick={onPress} className={"btn"}>
                {icon}
            </button>
        </Contianer>
    )
}

const Contianer = styled.div`
    .btn{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: #fff !important;
        background-color: #04110E !important;
        box-shadow: 0 0 10px #3f4947;
        outline: none;
        border: none;
        cursor: pointer;
    }
    .btn:hover{
       background-color: #fff !important;
       color: #1DAC87 !important;
       transition: ease-in-out 0.25s;
    }
`

export default CloseBtn
