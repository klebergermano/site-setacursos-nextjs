'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import style from "./nav_lateral_cursos.module.scss"

import Link from 'next/link'

function NavLateralCursos({ itemsNav }) {
    const [pathPagina, setPathPagina] = useState('')

    const pathname = window.location.href;
    const url = pathname.split('?')[0]; // Remove everything after '?' including '?'
    const urlArr = url.split('/');
    const lastItemUrl = (urlArr[urlArr.length - 1]).replace('-', '-');

    /*
        function addClassItemActiveNavCurso() {
    
    
            const navItemActive = document.querySelectorAll('.item_curso_' + lastItemUrl);
    
            navItemActive.forEach((item) => {
                //item.setAttribute('id', 'item_curso_ativo');
                item.classList.add('item_curso_lateral_ativo');
            })
    
    
    
        }
    */
    useEffect(() => {

        // addClassItemActiveNavCurso();
        setPathPagina(pathname)


    }, [pathname])


    return (

        <nav id='' className={style.bg_nav_cursos_lateral}>
            <h4>CURSOS DE INFORMÁTICA</h4>

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