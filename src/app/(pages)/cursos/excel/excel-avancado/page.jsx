

import style from "../../pages-cursos.module.scss"
import style_page from "./page.module.scss"

import Image from "next/image"

import Modulo from "../_modulosSlide/Modulos"
// import Contato from "@/components/Contato/Contato"
import slideObj from "./_slideObj"
import Planos from "./_planos/_planos"

import imgPrincipal from "@/../public/assets/images/cursos/excel/img-principal-excel-avancado.webp"
export const metadata = {
    title: "Excel Avançado",
    description: `Desperte seu potencial digital com o nosso curso Excel Avançado! Este curso foi cuidadosamente estruturado para guiá-lo desde os fundamentos até técnicas avançadas.`,
    openGraph: {
        title: "Excel Avançado",
        description: `Desperte seu potencial digital com o nosso curso Excel Avançado! Este curso foi cuidadosamente estruturado para guiá-lo desde os fundamentos até técnicas avançadas.`,
        url: "https://setacursos/cursos/informatica/informatica-jovem",
        images: [
            {
                url: `${imgPrincipal}`,
                width: 1200,
                height: 630,
                alt: "Imagem do curso Excel Avançado",
            },
        ],
        siteName: "Seta Cursos",
    },
};

export default function Page() {
    return (
        <main className={style.main}>
            <div className={style.content}>
                <h1 className={style_page.title}>Excel Avançado</h1>
                <figure className={style.bg_img_destaque} data-aos='fade-right'>
                    <Image width={800} height={300} src={imgPrincipal} />
                </figure>
                <div className={style.resumo}>
                    <p>

                        Aprenda a transformar dados em insights estratégicos com o Curso de Excel Avançado! Em seis meses,
                        você desenvolverá habilidades essenciais para dominar desde funções complexas e tabelas dinâmicas até automação de processos.
                        O curso é voltado para quem buscam otimizar suas atividades diárias, aprofundar-se em análise de dados e criar relatórios eficientes.
                    </p>
                    <p>
                        Com uma abordagem prática e conteúdo atualizado, você sairá preparado para enfrentar desafios do mercado e se destacar
                        em qualquer área que envolva gestão de informações. Invista em você e eleve seu conhecimento para o próximo nível!
                    </p>


                </div>

                <Modulo slideObj={slideObj} title={"Módulos do Curso Completo"} />

                <Planos />

            </div>{/* content */}

        </main>

    )


}