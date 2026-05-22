

import style from "./modulos-robotica-maker.module.scss"
import Image from "next/image"

const modulosInfo = [

  {
    nome: 'Introdução à Robótica',
    imgUrl: 'curso-robotica-introducao-seta-cursos.webp',
    resumo: `
Neste módulo introdutório, os alunos serão introduzidos ao fascinante mundo da robótica, explorando sua história, conceitos básicos e aplicações modernas.

`
    ,

  },

  {
    nome: 'Componentes Essenciais',
    imgUrl: 'curso-robotica-componentes-seta-cursos.webp',
    resumo: `
Neste módulo, os alunos irão aprender sobre os componentes fundamentais que compõem um robô, incluindo sensores, atuadores e controladores, e como eles interagem para realizar tarefas.

`,
  },

  {
    nome: 'Eletrônica Básica',
    imgUrl: 'curso-robotica-eletronica-basica-seta-cursos.webp',
    resumo: `
Neste módulo, os alunos serão introduzidos aos princípios básicos da eletrônica, incluindo circuitos, resistores, capacitores e transistores, essenciais para entender o funcionamento dos sistemas robóticos.

`,
  },


  {
    nome: 'Programação Básica',
    imgUrl: 'curso-robotica-programacao-basica-seta-cursos.webp',
    resumo: `
Neste módulo, os alunos irão aprender os fundamentos da programação e lógica de programação, essenciais para escrever código para controlar o comportamento dos robôs.

`,
  },

  {
    nome: 'Projetos em 3D',
    imgUrl: 'curso-robotica-projetos-ambiente-3d-seta-cursos.webp',
    resumo: `
    Nesse módulos abordamos a utilização de ferramentas de simulação para modelagem e teste em ambientes virtuais, capacitando os alunos a desenvolver e validar seus projetos antes da implementação física.
`,
  },


  {
    nome: 'Montagem e Configuração',
    imgUrl: 'curso-robotica-montagem-robos-seta-cursos.webp',
    resumo: `
Neste módulo prático, os alunos irão aprender como montar e configurar robôs, incluindo a integração de componentes eletrônicos e mecânicos para criar um robô funcional

`,
  },

  {
    nome: 'Lógica de Comunicação',
    imgUrl: 'curso-robotica-comunicacao-robos-seta-cursos.webp',
    resumo: `
Neste módulo, os alunos exploram a lógica por trás da comunicação entre dispositivos, abrangendo desde conexões com fio até a transmissão sem fio via Wi-Fi, Bluetooth e infravermelho, etc. Capacitando-os a projetar e desenvolver sistemas robóticos interconectados.

`,
  },

  {
    nome: 'Projetos Práticos',
    imgUrl: 'curso-robotica-projetos-praticos-seta-cursos.webp',
    resumo: `
Neste módulo os alunos terão a oportunidade de aplicar todos os conhecimentos adquiridos em projetos práticos, desafios e competições, estimulando a criatividade e a resolução de problemas.
`,
  },




]

function ModulosRoboticaMaker() {


  return (

    <div className={style.modulos_curso_robotica}>

      {modulosInfo.map((item, index) => (
        <div key={index} class={style.modulos_robotica_maker} data-aos='fade-right'>
          <h2>{item.nome} </h2>
          <figure>
            <Image fill={true} src={`/assets/images/cursos/robotica/${item.imgUrl}`} alt={item.nome} />
          </figure>

          <div class={style.resumo}>

            <p>
              {item.resumo}
            </p>

          </div>
        </div>

      ))}


    </div>


  )
}

export default ModulosRoboticaMaker;
