import style from "../../pages-cursos.module.scss"
import Image from "next/image"
import Planos from "./_planos/_planos"
import ModulosInglesCompleto from "./modulos/ModulosInglesCompleto"
import imgPrincipal from "@/../public/assets/images/cursos/ingles/curso-ingles-completo-seta-cursos.webp"


export const metadata = {
    title: "Inglês Completo",
    description: `Aprenda inglês de maneira eficaz em um curso completo! Aulas práticas e interativas para jovens e adultos. Entre em contato e inicie sua jornada para fluência!`,
    openGraph: {
        title: "Inglês Completo",
        description: `Aprenda inglês de maneira eficaz em um curso completo! Aulas práticas e interativas para jovens e adultos.`,
        url: "https://setacursos/cursos/ingles/ingles-completo",
        images: [
            {
                url: `${imgPrincipal}`,
                width: 1200,
                height: 630,
                alt: "Imagem do curso Inglês Completo",
            },
        ],

        siteName: "Seta Cursos",
    },

};

export default function Page() {
    return (


        <main className={style.main}>
            <div className={style.content}>

                <h1>Inglês Completo</h1>
                <figure className={style.bg_img_destaque}>
                    <Image width={800} height={300} src={imgPrincipal}
                        alt="Imagem do curso Inglês Completo"
                        title="Curso de Inglês Completo para jovens e adultos!"
                    />
                </figure>
                <div className={style.resumo}>
                    <p>
                        O nosso Curso Completo de Inglês foi pensado para levar os alunos do básico ao avançado de uma forma prática e divertida, tanto para os mais jovens quanto para os adultos. Buscamos assim proporcionar uma experiência completa de aprendizado e um bom ritmo de aprendizado, para que o aluno aprenda inglês de uma forma efetiva.
                    </p><p>
                        Com professores experientes em sala cobrimos os quatro pilares essenciais do aprendizado em novos idiomas: ouvir, escrever, ler e falar. Com essa abordagem, queremos que os alunos se sintam à vontade para usar o idioma inglês em diferentes situações, atingindo um nível avançado com confiança.
                    </p>
                    <p>
                        Cada tópico é organizado de forma cuidadosa para construir uma base sólida e progressiva, permitindo que os alunos desenvolvam suas habilidades ao longo do tempo. O curso é dividido em três etapas (básico, intermediário e avançado), com duração de um ano cada, e cada etapa vem com sua própria certificação.

                    </p>
                </div>


            </div>{/*content */}

            <ModulosInglesCompleto />

            <Planos />

        </main>

    )


}