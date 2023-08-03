import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import useRootStore from '../../Hooks/useRootStore'
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosArrowUp } from "react-icons/io"
import styled from 'styled-components'

const UpBtn = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const { visiable } = useRootStore().visibleStore
    const EventScrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return (
        <Contianer>
            <button data-aos="fade-up"
                data-aos-duration="1500" onClick={EventScrollTop} className='btn' style={{ display: visiable.upBtn ? "block" : "none" }}>
                <IoIosArrowUp size={24} />
            </button>
        </Contianer>
    )
}

const Contianer = styled.div`
    .btn{
        position: fixed;
        bottom: 100px;
        right: 20px;
        top: auto;
        left: auto;
        z-index: 5;
        width: 40px;
        height: 40px;
        background-color: #167A60;
        border: none;
        color: #fff;
        border-radius: 50%;
        cursor: pointer;
    }

    .btn:hover{
        transform: scale(1.1);
        transition: ease-in-out 0.25s;
        background-color: #fff !important;
        color: #167A60 !important;
    } 
`

export default observer(UpBtn)
