import style from "../../pages-cursos.module.scss"
import Image from "next/image"
import Modulo from "../_modulosSlide/Modulos"

import slideObj from "./_slideObj"


import Planos from "./_planos/_planos"


import imgPrincipal from "@/../public/assets/images/cursos/informatica/img-curso-informatica-rapida.webp"

export const metadata = {
    title: "Informática Kids",
    description: `O Curso de INFORMÁTICA RÁPIDA para ADULTOS possuir duração de 3 meses sendo especialmente desenvolvido para atender às necessidades do público adulto`,

    openGraph: {
        title: "Informática Kids",
        description: `O Curso de INFORMÁTICA RÁPIDA para ADULTOS possuir duração de 3 meses sendo especialmente desenvolvido para atender às necessidades do público adulto`,
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



export default function InformáticaAvancada() {
    return (


        <main className={style.main}>
            <div className={style.content}>

                <h1>Informática Rápida</h1>
                <figure className={style.bg_img_destaque} data-aos='fade-right'>
                    <Image width={800} height={300} src={imgPrincipal}
                        alt="Imagem do curso Informática para Adultos"
                        title="Curso de Informática Rápida, curso rápido e focado no mercado!"
                    />

                </figure>
                <div className={style.resumo}>
                    <p>
                        O <strong>Curso de Informática Rápida para Adultos</strong> foi desenvolvido para atender de forma prática e eficiente às necessidades do público adulto, facilitando sua inserção no universo digital e aprimorando habilidades essenciais para o mercado de trabalho moderno.
                    </p>
                    <p>
                        Pensando na disponibilidade e no ritmo de aprendizagem de cada aluno, oferecemos duas modalidades:
                    </p><br />
                    <ul>
                        <li>
                            <strong>Curso Normal:</strong> Com 2 aulas por semana, esta modalidade possui duração de 6 meses. Ideal para quem prefere um aprendizado mais gradual e tem uma rotina mais flexível.
                        </li>
                        <br />
                        <li>
                            <strong>Curso Intensivo:</strong> Com 4 aulas por semana, esta opção é perfeita para quem busca resultados mais rápidos, completando o curso em apenas 3 meses.
                        </li>
                    </ul><br />
                    <p>
                        Em ambas as modalidades, o conteúdo é cuidadosamente estruturado para abordar desde os conceitos básicos de informática até as habilidades mais relevantes e aplicáveis ao ambiente profissional, sempre de forma clara, objetiva e personalizada.
                    </p>
                    <p>
                        Nosso foco é garantir que, ao final do curso, cada aluno esteja confiante no uso das principais ferramentas tecnológicas, ampliando suas oportunidades pessoais e profissionais.
                    </p>
                </div>

                <Modulo slideObj={slideObj} />

                <Planos />


            </div>{/* content */}


        </main>

    )


}