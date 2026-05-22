'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import style from "./nav_cursos.module.scss"
import { usePathname } from 'next/navigation';

import Link from 'next/link'

function NavCursos({ itemsNav }) {
    const [pathPagina, setPathPagina] = useState('')

    const pathname = usePathname()
    const numItemsNav = itemsNav.length;
    //console.log('LEEEENGH=>>>>>>>>>>>>>>>>>>', numeroItemsNav)
    const url = pathname.split('?')[0]; // Remove everything after '?' including '?'
    const urlArr = url.split('/');
    const lastItemUrl = (urlArr[urlArr.length - 1]).replace('-', '-');






    function addClassItemActiveNavCurso(lastItemUrl) {

        const navAtivos = document.querySelectorAll('.item_curso_ativo');
        navAtivos.forEach((item) => {
            item.classList.remove('item_curso_ativo');
        })


        const navItemActive = document.querySelectorAll('.item_curso_' + lastItemUrl);
        navItemActive.forEach((item) => {
            //item.setAttribute('id', 'item_curso_ativo');
            item.classList.add('item_curso_ativo');
        })


    }

    useEffect(() => {

        addClassItemActiveNavCurso(lastItemUrl);
        setPathPagina(lastItemUrl)
        navVisibility('bg-nav-cursos-por-categoria')

        const nav = document.getElementById("bg-nav-cursos-lateral")
        const valorHeight = (75 + (50 * numItemsNav)) + "px";
        nav.style.height = valorHeight;

    }, [pathname])


    /***************************************************** */

    function navVisibility(elementID) {

        // Select the target element
        const targetElement = document.getElementById(elementID);

        // Create an intersection observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                let nav = document.getElementById("bg-nav-cursos-lateral")

                if (entry.isIntersecting) {
                    nav.style.opacity = "1"

                    nav.style.height = "1px"
                    nav.style.padding = "10px"
                    nav.style.paddingTop = "0px"
                    nav.style.paddingBottom = "0px"


                    //<nav className="style paddinfg"></nav> = "10px"
                    nav.style.marginBottom = "0px"
                    nav.children[0].style.opacity = '0'
                    nav.children[1].style.opacity = '0'


                } else {
                    nav.style.opacity = "1"
                    nav.style.marginBottom = "0px";
                    const valorHeight = (75 + (50 * numItemsNav)) + "px";
                    nav.style.height = valorHeight;

                    nav.style.padding = "10px"
                    nav.style.paddingBottom = "20px"

                    nav.children[0].style.opacity = '1'
                    nav.children[1].style.opacity = '1'


                }
            });
        });

        // Start observing the target element
        //  observer.observe(targetElement);

    }


    return (
        <>

            <nav id='bg-nav-cursos-por-categoria' className={style.bg_nav_cursos_por_categoria}>
                <h2>CURSOS DE INFORMÁTICA</h2>
                {
                    itemsNav.map((item) => {
                        const itemPath = (item.link).split('/')
                        const lastItemPath = itemPath[itemPath.length - 1];
                        return (

                            <div className={`${style.item_curso} item_curso_${lastItemPath}`}>

                                <Link href={`/cursos/${item.link}`}>
                                    <figure>
                                        <Image width={200} height={0} src={`/assets/images/cursos/${item.imgUrl}`} alt='curso-informatica-pratica-seta-cursos' />
                                        <figcaption>
                                            {item.nome}
                                        </figcaption>
                                    </figure>
                                </Link>
                            </div>
                        )
                    })
                }
            </nav>



        </>

    )

}


export default NavCursos