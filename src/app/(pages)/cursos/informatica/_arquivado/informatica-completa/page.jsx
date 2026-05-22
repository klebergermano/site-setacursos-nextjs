'use client'
import NavCursos from "../../_NavCursos/NavCursos"
import style from "../../pages-cursos.module.scss"
import Image from "next/image"

import Icon from "@/../public/assets/icons/index"
import Modulo from "../_slideModulos/Modulos"
// import Contato from "@/components/Contato/Contato"
import slideObj from "./_slideObj"
import _itemsNav from "../_itemsNavCursos"
import VantagensCurso from "../Lateral/VantagensCurso"

import { PiChalkboardTeacherLight } from "react-icons/pi";


export default function Page() {
    return (
        <>
            <div className={`${style.pages_informatica} pages`}>

                <NavCursos itemsNav={_itemsNav} />
                <div className={style.bg_content_page}>

                    <main className={style.main}>
                        <div className={style.content}>

                            <h1>Informática Completa</h1>
                            <figure className={style.bg_img_destaque}>
                                <Image width={800} height={300} src={'/assets/images/cursos/informatica/img-curso-informatica-01.png'} />
                            </figure>
                            <div className={style.resumo}>

                                <p>
                                    Desperte seu potencial digital com nosso curso "Informática Completa"! Se você está apenas começando ou já possui algum conhecimento e deseja se aprofundar, este curso foi cuidadosamente estruturado para guiá-lo desde os fundamentos até técnicas avançadas.
                                </p>

                                <p>
                                    Nosso ambiente de aprendizado é dinâmico e acolhedor, repleto de atividades práticas e dicas valiosas. Você ganhará a confiança necessária para navegar no universo da tecnologia, dominando desde as ferramentas básicas até as mais sofisticadas. Ao longo do curso, terá a oportunidade de aplicar o que aprendeu, preparando-se para enfrentar os desafios do mundo digital com segurança e competência.
                                </p>


                            </div>

                            <div className={style.visao_geral_curso}>
                                <h4>VISÃO GERAL </h4>
                                <li>

                                    <Icon name="calendar" className={style.icon} />
                                    Tempo de Duração: 18 meses</li>
                                <li>


                                    <Icon name="class2" className={style.icon} />
                                    Aulas por Semana: 2  (1 hora p/ aula)

                                </li>

                                <li>


                                    <PiChalkboardTeacherLight style={{ maxWidth: '45px', marginLeft: "-3px" }} className={style.icon} />
                                    + 1 aula extra p/ prática e reposição
                                </li>
                                <li>



                                    <Icon name="time-duration" className={style.icon} />

                                    Carga Horária:  128 horas </li>
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