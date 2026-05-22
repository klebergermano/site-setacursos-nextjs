

import style from "./modulos-curso.module.scss"
import Image from "next/image"

const modulosInfo = [

  {
    nome: 'Listening (Escuta)',
    imgUrl: 'curso-ingles-listening-seta-cursos.webp',
    resumo: `
    
        <p>
          No módulo do curso de <strong>inglês completo</strong>,
          <em>Listening (escuta)</em> é projetado para que os alunos possam
          aprimorar a sua habilidade de <strong>compreensão auditiva do idioma inglês</strong>,
          para isso utilizamos uma variedade de
          recursos, como gravações autênticas, diálogos, palestras e material audiovisual.
        </p><p>
          Os alunos são apresentados ainda a
          diferentes sotaques em inglês, como o <em>Americano</em> e <em>Britânico</em>, tendo acesso a diferentes ritmos e estilos de fala,
          melhorando a capacidade de entender nativos em diferentes contextos.
        </p>
`
    ,

  },

  {
    nome: 'Reading (Leitura)',
    imgUrl: 'curso-ingles-reading-seta-cursos.webp',
    resumo: `
    <p>
          A <strong>compreensão de leitura em inglês</strong> é crucial para aprofundar o entendimento do idioma.
          Assim temos o módulo <em>Reading (leitura)</em> no nosso curso de <strong>inglês completo</strong>, onde abraçamos a leitura
          abrangendo textos de diferentes gêneros, desde artigos jornalísticos até literatura
          contemporânea do idioma inglês. 
          </p>
          <p>Nesse módulo os alunos aprimoram suas habilidades de <strong>interpretação em inglês</strong>,
          e ampliam seu <em>vocabulário</em>, passando a compreender diferentes estilos de escrita,
          onde incentivamos a leitura crítica e analítica,
          promovendo a capacidade de compreender ideias expressas nas mais diferentes formas no idioma inglês.

        </p>
`,
  },

  {
    nome: 'Talking (Conversação)',
    imgUrl: 'curso-ingles-talking-seta-cursos.webp',
    resumo: `
     <p>No tópico de conversação <em>Talking (conversação)</em> do curso de <strong>inglês completo</strong>,
          visamos desenvolver a <em>confiança</em> e a <em>fluência oral</em> dos alunos em inglês. Através de atividades interativas,
          discussões, debates e simulações, os alunos terão a oportunidade de aplicar o que aprenderam nas outras áreas.
          </p><p>
          Esse módulo enfatiza a
          comunicação eficaz em situações cotidianas e profissionais, preparando os alunos para interagirem de forma
          natural e fluida ao <strong>falar inglês</strong>.</p>
`,
  },


  {
    nome: 'Writing (Escrita)',
    imgUrl: 'curso-ingles-writing-seta-cursos.webp',
    resumo: `

          <p>
          No módulo do curso de <strong>inglês completo</strong>, <em>Writing (escrita)</em>, os alunos
          são guiados para desenvolver suas
          habilidades de expressão escrita. Desde a construção de frases simples
          até a redação de ensaios mais complexos, os exercícios práticos abordam <em>gramática</em>,
          <em>vocabulário</em> e <em>estrutura textual</em>. 
          </p><p> Nosso foco é a <strong>clareza</strong>,
          <strong> coesão</strong> e desenvolvimento de <strong>argumentos</strong>,
          preparando os alunos para se comunicarem efetivamente por meio da
          <strong> escrita</strong> em diversos contextos.
        </p>
`,




  }
]

function ModulosInglesCompleto() {


  return (

    <div className={style.modulos_curso}>

      {modulosInfo.map((item, index) => (
        <div key={index} data-aos='fade-right'>
          <h2>{item.nome} </h2>
          <figure>
            <Image fill={true} src={`/assets/images/cursos/ingles/${item.imgUrl}`} alt={item.nome} />
          </figure>

          <div class={style.resumo} dangerouslySetInnerHTML={{ __html: item.resumo }}>



          </div>
        </div>

      ))}

    </div>

  )
}

export default ModulosInglesCompleto;
