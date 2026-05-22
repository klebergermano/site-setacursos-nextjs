

import style from "../../pages-cursos.module.scss"


import Image from "next/image"
import Planos from "./_planos/_planos"
import Icon from "@/../public/assets/icons/index"
import imgPrincipal from "@/../public/assets/images/cursos/ingles/curso-ingles-kids-seta-cursos.webp"



import ModulosInglesKids from "./modulos/ModulosInglesKids"

export const metadata = {
    title: "Inglês Kids",
    description: `Dê ao seu filho a oportunidade de aprender inglês de forma divertida e eficaz com nosso curso "Inglês Kids"! Aulas interativas e práticas criadas especialmente para crianças. Inscreva-se e ajude seu pequeno a iniciar uma jornada de aprendizado cheia de possibilidades!`,
    openGraph: {
        title: "Inglês Kids",
        description: `Dê ao seu filho a oportunidade de aprender inglês de forma divertida e eficaz!`,
        url: "https://setacursos.com.br/cursos/ingles/ingles-kids", // Substitua pela URL da sua postagem
        images: [
            {
                url: `${imgPrincipal}`,
                width: 1200,
                height: 630,
                alt: "Imagem do curso Inglês Kids",
            },
        ],
        siteName: "Seta Cursos",
    },


};

export default function Page() {
    return (


        <main className={style.main}>
            <div className={style.content}>

                <h1>Inglês Kids</h1>
                <figure className={style.bg_img_destaque}>
                    <Image width={800} height={300} src={imgPrincipal}
                        alt="Imagem do curso Inglês Kids"
                        title="Curso de Inglês Kids, feito sob medida para crianças!"

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

                {/* <div className={style.visao_geral_curso}>
                    <h4>VISÃO GERAL </h4>
                    <li>

                        <Icon name="calendar" className={style.icon} />
                        Tempo de Duração: 12 meses (Por etapa)</li>
                    <li>

                        <Icon name="class2" className={style.icon} />
                        Aulas por Semana: 2 (2 horas p/ aula)</li>
                    <li>

                        <Icon name="time-duration" className={style.icon} />

                        Carga Horária:  192 horas </li>
                    <li>
                        <Icon name="certificate" className={style.icon} />
                        Certificado de qualificação profissional incluso!</li>
                
                    <li>
                        <Icon name="moeda-real" className={style.icon} />
                        Investimento: R$ 180,00 (mensal)
                    </li>

                </div> */}


            </div>{/* content */}
            <ModulosInglesKids />
            <Planos />


        </main>

    )


}