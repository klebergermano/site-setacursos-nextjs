import style from "../../pages-cursos.module.scss"
import Image from "next/image"
import slideObj from "./_slideObj"
import Modulo from "./_modulosSlideKids/Modulos"
import Planos from "./_planos/_planos"

import imgPrincipal from "@/../public/assets/images/cursos/informatica/curso-informatica-kids.webp"

export const metadata = {
    title: "Informática Kids",
    description: `No curso de informática para crianças, o objetivo é proporcionar uma introdução divertida e envolvente ao mundo digital.`,

    openGraph: {
        title: "Informática Kids",
        description: `No curso de informática para crianças, o objetivo é proporcionar uma introdução divertida e envolvente ao mundo digital.`,
        url: "https://setacursos/cursos/informatica/informatica-kids",
        images: [
            {
                url: `${imgPrincipal}`,
                width: 1200,
                height: 630,
                alt: "Imagem do curso Informática Kids",
            },
        ],

        siteName: "Seta Cursos",
    },

};


export default function InformáticaKids() {
    return (

        <main className={style.main}>

            <div className={style.content}>

                <h1>Informática Kids</h1>
                <figure className={style.bg_img_destaque} data-aos='fade-right'>
                    <Image width={800} height={300} src={imgPrincipal}
                        alt="Imagem do curso Informática Kids"
                        title="Curso de Informática Kids feito sob medida para crianças!"
                    />
                </figure>
                <div className={style.resumo}>
                    <p>
                        No curso de informática para crianças, o objetivo é proporcionar uma introdução divertida e
                        envolvente ao mundo digital, preparando os pequenos para as diversas tecnologias que farão
                        parte de suas vidas. As aulas são projetadas para serem interativas, utilizando jogos,
                        atividades práticas e projetos criativos que estimulam a curiosidade e o aprendizado. Os alunos
                        aprendem noções básicas de programação, navegação segura na internet e o uso de softwares,
                        desenvolvendo habilidades essenciais que serão fundamentais no futuro.
                    </p>
                    <br />
                </div>




                <Modulo slideObj={slideObj} title={"Módulos Informática Kids"} />

                {/* <ModulosInformatica /> */}


            </div>{/* contain */}
            <Planos />

        </main>

    )


}