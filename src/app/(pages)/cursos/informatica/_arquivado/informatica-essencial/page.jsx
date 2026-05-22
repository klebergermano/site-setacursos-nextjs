'use client'
import NavCursos from "../../../X_NavCursos/NavCursos"
import style from "../../pages-cursos.module.scss"
import Image from "next/image"

import Icon from "@/../public/assets/icons/index"
import Modulo from "../../_modulosSlide/Modulos"


import slideObj from "./_slideObj"
import _itemsNav from "../../_itemsNavCursos"
import VantagensCurso from "../../Lateral/VantagensCurso"



export default function Page() {
    return (
        <>
            <div className={`${style.pages_informatica} pages`}>

                <NavCursos itemsNav={_itemsNav} />
                <div className={style.bg_content_page}>

                    <main className={style.main}>
                        <div className={style.content}>


                            <h1>Informática Essêncial</h1>
                            <figure className={style.bg_img_destaque}>
                                <Image width={800} height={300} src={'/assets/images/cursos/informatica/img-curso-informatica-01.png'} />
                            </figure>
                            <div className={style.resumo}>
                                <p>Explore os fundamentos da informática com nosso curso essencial!
                                    Seja você um iniciante ou alguém em busca de aprimoramento,
                                    nosso curso INFORMÁTICA ESSENCIAL é projetado para atender a todos os níveis de conhecimento,
                                    tornando-o acessível e envolvente para todos.</p>

                                <p>Nosso ambiente de aprendizado é acolhedor e prático, repleto de dicas valiosas, proporcionando a você a
                                    confiança necessária para se aventurar no mundo digital. Ao longo do curso, você terá a oportunidade de
                                    explorar e aplicar os conhecimentos adquiridos, preparando-o para enfrentar os desafios e oportunidades que a tecnologia oferece.</p>
                            </div>







                            <div className={style.visao_geral_curso}>
                                <h4>VISÃO GERAL </h4>
                                <li>

                                    <Icon name="calendar" className={style.icon} />
                                    Tempo de Duração: 12 meses
                                </li>
                                <li>

                                    <Icon name="class2" className={style.icon} />
                                    Aulas por Semana: 2 (1 horas p/ aula)</li>
                                <li>

                                    <Icon name="time-duration" className={style.icon} />

                                    Carga Horária: 112 horas </li>
                                <li>
                                    <Icon name="certificate" className={style.icon} />
                                    Certificado de qualificação profissional incluso!</li>
                                <li>
                                    <Icon name="books" className={style.icon} />
                                    Material didático incluso!

                                </li>
                                <li>
                                    <Icon name="moeda-real" className={style.icon} />
                                    Investimento: R$ 160,00 (mensal)
                                </li>
                            </div>
                            <Modulo slideObj={slideObj} />



                        </div>{/* content */}

                    </main>
                    <aside className={style.aside}>
                        <VantagensCurso />
                    </aside>

                </div>

            </div>
            {/* <Contato /> */}
        </>
    )


}