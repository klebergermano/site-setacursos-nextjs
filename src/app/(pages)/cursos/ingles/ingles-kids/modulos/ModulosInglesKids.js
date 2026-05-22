

import style from "./modulos-curso.module.scss"
import Image from "next/image"

const modulosInfo = [

  {
    nome: 'Frases e Expressões Cotidianas',
    imgUrl: 'curso-ingles-kids-frases-expressoes-seta-cursos.webp',
    resumo: `
     <p>

                    Introdução de expressões e frases em inglês que as crianças usam no dia a dia, como cumprimentos,
                    pedidos simples e as resposta mais comuns para essas expressões.
                </p>

` ,

  },

  {
    nome: 'Vocabulário Temático',
    imgUrl: 'curso-ingles-kids-vocabulario-tematico-seta-cursos.webp',
    resumo: `
                <p>Ensino de vocabulário relacionado aos interesses e experiências das crianças, como animais, cores, alimentos, família, etc.</p>

` ,

  },


  {
    nome: 'Histórias e Contos',
    imgUrl: 'curso-ingles-kids-historias-contos-seta-cursos.webp',
    resumo: `
    <p>Incorporação de histórias, contos e fábulas em inglês para desenvolver habilidades de audição, compreensão e leitura.</p>

` ,

  },

  {
    nome: 'Prática e Conversação',
    imgUrl: 'curso-ingles-kids-pratica-conversacao-seta-cursos.webp',
    resumo: `
    <p>Estímulo à prática de conversação em situações simuladas e interações sociais, desenvolvendo a confiança das crianças em usar o idioma inglês.</p>

` ,

  },

  {
    nome: 'Atividades Criativas',
    imgUrl: 'curso-ingles-kids-atividades-criativas-seta-cursos.webp',
    resumo: `
<p>Incentivo à criação de projetos e atividades criativas, como desenhos,
  peças teatrais simples, cartas, etc., para praticar o inglês de forma mais 
  prática e divertida.</p>

    ` ,

  },

  {
    nome: 'Avaliações Amigáveis',
    imgUrl: 'curso-ingles-kids-avaliacoes-amigaveis-seta-cursos.webp',
    resumo: `
    <p>Realização de avaliações periódicas de forma amigável e construtiva para acompanhar o progresso das crianças no seu aprendizado de inglês
                    e identificar áreas de melhoria.</p>

` ,

  },

  {
    nome: 'Culturas e Tradições',
    imgUrl: 'curso-ingles-kids-cultura-tradicoes-seta-cursos.webp',
    resumo: `
<p>Também abordamos as culturas e tradições de países de língua inglesa para ampliar o entendimento das crianças sobre o contexto linguístico e cultural do idioma inglês.</p>

    ` ,

  },





  {
    nome: 'Jogos e Atividades',
    imgUrl: 'curso-ingles-kids-jogos-atividades-seta-cursos.webp',
    resumo: `
                <p>Utilização de jogos, brincadeiras e atividades divertidas para tornar o aprendizado do inglês mais interativo e envolvente.</p>


` ,

  },

  {
    nome: 'Musica e Canções',
    imgUrl: 'curso-ingles-kids-musica-cancoes-seta-cursos.webp',
    resumo: `
    <p>Introdução de músicas e canções em inglês para ajudar na memorização de vocabulário e na prática da pronúncia.</p>


` ,

  },

  {
    nome: 'Recursos Multimídia',
    imgUrl: 'curso-ingles-kids-recursos-multimidia-seta-cursos.webp',
    resumo: `´
                <p>Utilização de recursos multimídia, como vídeos, aplicativos educativos e jogos online, para complementar o aprendizado de inglês em sala de aula.</p>

` ,

  },



]

function ModulosInglesCompleto() {


  return (

    <div className={style.modulos_curso}>
      <h3>Módulos do Curso</h3>

      {modulosInfo.map((item, index) => (
        <div key={index} data-aos='fade-right'>
          <figure>
            <Image fill={true} src={`/assets/images/cursos/ingles/${item.imgUrl}`} alt={item.nome} />
          </figure>
          <h2>{item.nome} </h2>

          <div class={style.resumo} dangerouslySetInnerHTML={{ __html: item.resumo }}>



          </div>
        </div>

      ))}

    </div>

  )
}

export default ModulosInglesCompleto;
