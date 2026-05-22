'use client'
import NavCursos from "../../../X_NavCursos/NavCursos"
import style from "./page.module.scss"
import Image from "next/image"

import Icon from "@/../public/assets/icons/index"
import Modulo from "../../_modulosSlide/Modulos"
// import Contato from "@/components/Contato/Contato"
import slideObj from "./_slideObj"
import _itemsNav from "../../_itemsNavCursos"
import VantagensCurso from "../../../ingles/Lateral/VantagensCurso"



export default function Page() {
    return (
        <>
            <div className={`${style.pages_informatica} pages`}>

                <NavCursos itemsNav={_itemsNav} />
                <div className={style.bg_content_page}>

                    <main className={style.main}>

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
                                Tempo de Duração: 14 meses</li>
                            <li>

                                <Icon name="class2" className={style.icon} />
                                Aulas por Semana: 2 (2 horas p/ aula)</li>
                            <li>

                                <Icon name="time-duration" className={style.icon} />

                                Carga Horária:  224 horas </li>
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

                        <h3>Módulos do Curso</h3>
                        <Modulo slideObj={slideObj} />


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