'use client'
import NavCursos from "../../_NavCursos/NavCursos"
import style from "../../pages-cursos.module.scss"
import Image from "next/image"

import Icon from "@/../public/assets/icons/index"
import Modulo from "../_modulosSlide/Modulos"
// import Contato from "@/components/Contato/Contato"
import slideObj from "./_slideObj"
import _itemsNav from "../_itemsNavCursos"
import VantagensCurso from "../Lateral/VantagensCurso"
import Planos from "./_planos"
import { PiChalkboardTeacherLight } from "react-icons/pi";


export default function Page() {
    return (
        <>
            <div className={`${style.pages_informatica} pages`}>

                <NavCursos itemsNav={_itemsNav} />
                <div className={style.bg_content_page}>

                    <main className={style.main}>

                        <div className={style.content}>

                            <h1>Informática Jovem</h1>
                            <figure className={style.bg_img_destaque}>
                                <Image width={800} height={300} src={'/assets/images/cursos/informatica/img-curso-informatica-01.png'} />
                            </figure>
                            <div className={style.resumo}>
                                <p>
                                    Desperte seu potencial digital com o nosso curso "Informática Jovem"! Se você está apenas começando ou já possui algum conhecimento e deseja se aprofundar, este curso foi cuidadosamente estruturado para guiá-lo desde os fundamentos até técnicas avançadas.
                                </p>
                                <p>
                                    Voltado para jovens e jovens adultos, oferecemos dois planos: o "Informática Essencial", que abrange do básico ao intermediário em 12 meses (6 meses por etapa), e o "Informática Completa", que vai do básico ao avançado em 18 meses, também dividido em 6 meses por etapa.
                                </p>
                                <p>
                                    Nosso ambiente de aprendizado é dinâmico e acolhedor, repleto de atividades práticas e dicas valiosas. Você ganhará a confiança necessária para navegar no universo da tecnologia, dominando desde as ferramentas básicas até as mais sofisticadas. Ao longo do curso, terá a oportunidade de aplicar o que aprendeu, preparando-se para enfrentar os desafios do mundo digital com segurança e competência.
                                </p>


                            </div>

                            <Modulo slideObj={slideObj} title={"Módulos do Curso Completo"} />

                            <Planos />

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