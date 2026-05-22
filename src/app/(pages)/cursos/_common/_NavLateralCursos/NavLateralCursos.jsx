'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import style from "./nav_lateral_cursos.module.scss"

import Link from 'next/link'

function NavLateralCursos({ itemsNav, title }) {


    return (

        <nav id='bg-nav-cursos-lateral' className={style.bg_nav_cursos_lateral}>
            <h4>{title ? title : "CURSOS"}</h4>

            <ul>
                {

                    itemsNav.map((item) => {
                        const itemPath = (item.link).split('/')
                        const lastItemPath = itemPath[itemPath.length - 1];
                        return (

                            <li className={`${style.item_curso} item_curso_${lastItemPath}`}>

                                <Link href={`/cursos/${item.link}`}>

                                    {item.nome}

                                </Link>
                            </li>
                        )
                    })
                }

            </ul>

        </nav>


    )

}


export default NavLateralCursos