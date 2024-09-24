'use client'
import NavCursos from "../../_NavCursos/NavCursos"
import style from "../../pages-cursos.module.scss"
import Image from "next/image"

import Icon from "@/../public/assets/icons/index"
import Modulo from "../_slideModulos/Modulos"
// import Contato from "@/components/Contato/Contato"
import slideObj from "./_slideObj"
import _itemsNav from "../_itemsNavCursos"
import VantagensCurso from "../../ingles/Lateral/VantagensCurso"
import { PiChalkboardTeacherLight } from "react-icons/pi";



export default function InformáticaAvancada() {
    return (
        <>
            <div className={`${style.pages_informatica} pages`}>

                <NavCursos itemsNav={_itemsNav} />
                <div className={style.bg_content_page}>

                    <main className={style.main}>
                        <div className={style.content}>

                            <h1>Informática Rápida</h1>
                            <figure className={style.bg_img_destaque}>
                                <Image width={800} height={300} src={'/assets/images/cursos/informatica/img-curso-informatica-rapida.png'} />
                            </figure>
                            <div className={style.resumo}>
                                <p>
                                    O Curso de INFORMÁTICA RÁPIDA para ADULTOS possuir duração de 3 meses sendo especialmente desenvolvido para atender às necessidades do público adulto que busca acelerar sua inserção no mundo da informática.
                                </p>
                                <p>
                                    Concentrando-se no essencial, o curso aborda de forma direta e personalizada, desde conceitos fundamentais até habilidades relevantes para o mercado de trabalho.
                                </p>
                            </div>

                            <div className={style.visao_geral_curso}>
                                <h4>VISÃO GERAL </h4>
                                <li>

                                    <Icon name="calendar" className={style.icon} />
                                    Tempo de Duração: 3 meses</li>
                                <li>

                                    <Icon name="class2" className={style.icon} />
                                    Aulas por Semana: 2 (1 horas p/ aula)</li>

                                <li>


                                    <PiChalkboardTeacherLight style={{ maxWidth: '45px', marginLeft: "-3px" }} className={style.icon} />
                                    + 1 aula extra p/ prática e reposição
                                </li>


                                <li>
                                    <Icon name="time-duration" className={style.icon} />
                                    Carga Horária:  24 horas </li>



                                <li>

                                    <Icon name="certificate" className={style.icon} />
                                    Certificado de qualificação profissional incluso!</li>
                                <li>
                                    <Icon name="books" className={style.icon} />
                                    Material didático incluso!
                                </li>
                                <li>
                                    <Icon name="moeda-real" className={style.icon} />
                                    Investimento: R$ 220,00 (mensal)
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