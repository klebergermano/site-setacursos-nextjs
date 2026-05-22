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



export default function InformáticaAvancada() {
    return (
        <>
            <div className={`${style.pages_informatica} pages`}>

                <NavCursos itemsNav={_itemsNav} />
                <div className={style.bg_content_page}>

                    <main className={style.main}>

                        <h1>Informática Avançada</h1>
                        <figure className={style.bg_img_destaque}>
                            <Image width={800} height={300} src={'/assets/images/cursos/informatica/img-curso-informatica-avancada.png'} />
                        </figure>
                        <div className={style.resumo}>
                            <p>
                                Aprofunde seus conhecimentos com nosso curso avançado em Informática! Se você já possui uma base sólida e está pronto para expandir suas habilidades, nosso curso de INFORMÁTICA AVANÇADA é ideal para você. Desenvolvido para profissionais e entusiastas que buscam um nível superior de expertise, este curso oferece uma imersão completa em tópicos complexos e emergentes da tecnologia.
                            </p>
                            <p>
                                Nosso ambiente de aprendizado é altamente especializado e interativo, projetado para proporcionar uma experiência envolvente e enriquecedora. Com acesso a recursos avançados e suporte contínuo, você terá a oportunidade de explorar técnicas avançadas, resolver problemas desafiadores e aplicar estratégias inovadoras no campo da informática. Prepare-se para transformar seu conhecimento e enfrentar os desafios mais sofisticados que o mundo digital tem a oferecer.
                            </p>
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
                                Investimento: R$ 170,00 (mensal)
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