'use client'
import Image from "next/image"
import ImgLogo from "@/../public/assets/images/logo-mobile.png"
import style from "./header_mobile.module.scss"

import NavHeaderMobile from "./NavHeaderMobile/NavHeaderMobile"
import LoginAlunoHeader from "../LoginALunoHeader/LoginALunoHeader"

import AOS from 'aos';
import 'aos/dist/aos.css'


import { useEffect } from "react";


function HeaderMobile() {

    useEffect(() => {
        AOS.init({ duration: 1000 });

    }, []); // Empty dependency array ensures the effect runs only once when the component mounts



    return (
        <header className={style.header_mobile} id={style.header_mobile} name='header'>
            <div className={style.header_container}>
                <div className={style.h_columns} id={style.h_column_1}>
                    <a href="/">
                        <figure className={style.bg_logo}>
                            <Image
                                src={ImgLogo}
                                fill={true}
                                alt="Logo Seta Cursos"
                            />
                        </figure>



                    </a>
                </div>

                <div className={style.h_columns} id={style.h_column_2}>
                    <div className={style.sub_h_clmn}>
                        <LoginAlunoHeader />
                    </div>
                    <div className={style.sub_h_clmn} >

                        <NavHeaderMobile />

                    </div>

                </div>
            </div>
        </header >
    )
}

export default HeaderMobile
