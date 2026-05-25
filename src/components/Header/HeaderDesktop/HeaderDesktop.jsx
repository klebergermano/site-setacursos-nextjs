'use client'
import Image from "next/image"
import ImgLogo from "@/../public/assets/images/logo.png"
import style from "./header_desktop.module.scss"
import Link from "next/link"
import NavHeaderDesktop from "./NavHeaderDesktop/NavHeaderDesktop"
import LoginAlunoHeader from "../LoginALunoHeader/LoginALunoHeader"

import AOS from 'aos';
import 'aos/dist/aos.css'

import { useEffect } from "react";


function HeaderDesktop() {

    useEffect(() => {
        AOS.init({ duration: 1000 });

    }, []); // Empty dependency array ensures the effect runs only once when the component mounts



    return (
        <header className={style.header_desktop} id={style.header_desktop} name='header'>
            <div className={style.header_container}>
                <div className={style.h_columns} id={style.h_column_1}>
                    <a href="/">
                        <figure className={style.bg_logo}>
                            <Image
                                src={ImgLogo}
                                fill={true}
                                alt="Seta Cursos"
                            />
                        </figure>
                    </a>
                </div>

                <div className={style.h_columns} id={style.h_column_2}>
                    <div className={style.sub_h_clmn}>
                        <LoginAlunoHeader />
                    </div>
                    <div className={style.sub_h_clmn}>
                        <NavHeaderDesktop />

                    </div>

                </div>
            </div>
        </header>
    )
}

export default HeaderDesktop
