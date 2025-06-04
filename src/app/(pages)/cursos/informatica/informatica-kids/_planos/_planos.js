import style from "./_planos.module.scss"
import Image from "next/image"
export default function Planos() {

  return (
    <div className={style.bg_trilha}>
      <br />

      <div className={style.txt_trilha}>

        <div>
          <h3>Trilha Tec Kids</h3>
          <p data-aos='fade-right'>

            Voltado para crianças, indicamos a"Trilha Tecnológica",
            que é um pacote incrível de dois cursos:
            Informática Kids e Robótica Kids.
            Este percurso foi desenvolvido para guiar os pequenos em uma jornada de
            aprendizado digital e tecnológico, preparando-os para explorar o fascinante universo da robótica.
          </p>

          <p data-aos='fade-left'>
            <span>Informática Kids:</span> No curso de Informática Kids, os alunos têm a oportunidade de aprender noções básicas de computação,
            onde desenvolvem habilidades fundamentais que formarão a base para a próxima etapa da trilha.
          </p>

          <p data-aos='fade-right'>
            <span>Robótica Kids:</span> No curso de Robótica Kids, os conhecimentos adquiridos na Informática
            se transformam em experiências práticas. As crianças aprendem programação enquanto
            constroem seus primeiros dispositivos robóticos,
            explorando conceitos de mecânica e eletrônica de forma divertida.
          </p>
        </div>

        <figure data-aos='zoom-in-up'>
          <Image width={300} height={220} src={"/assets/images/cursos/informatica/trilha.png"} />
        </figure>
      </div>

      <div className={style.bg_planos}>
        <h3> Planos</h3>
        <div className={style.planos} data-aos='zoom-in-right'>
          <h4>Informática Kids</h4>

          <ul>
            <br />
            <li>
              2 Aulas por semana <br />
              <span className={style.txt_pequeno}>(1 horas p/ aula)</span>
            </li>

            <li className={style.preco}>
              R$ <b><span className={style.valor_destaque}>160</span>,00</b><br />
              <span className={style.txt_pequeno}>(mensalidade)</span>
            </li>

            <li>
              12 meses / 96 horas <br />
              <span className={style.txt_pequeno}>
                (6 meses por etapa)</span>
            </li>
            <br />

            <li className={style.li_vantagens}>
              ✓ Certificado incluso!
            </li>

            <li className={style.li_vantagens}>
              ✓ Material didático incluso!
            </li>

            {/* <li className={style.li_vantagens}>
              ✓  Matrícula gratuita!
            </li> */}

            <li className={style.li_vantagens}>
              ✓  Plantão de dúvidas!
            </li>

          </ul>
          <div className={style.bg_background}></div>

        </div>

        {/* ////////////////////////////////////////////////////  */}
        <div className={style.planos} data-aos='zoom-in-left'>
          <h4>Robótica Kids</h4>


          <ul>
            <br />
            <li>
              2 Aulas por semana <br />
              <span className={style.txt_pequeno}>(1 horas p/ aula)</span>
            </li>

            <li className={style.preco}>
              R$ <b><span className={style.valor_destaque}>180</span>,00</b><br />
              <span className={style.txt_pequeno}>(mensalidade)</span>
            </li>

            <li>
              18 meses / 144 horas <br />
              <span className={style.txt_pequeno}>
                (6 meses por etapa)</span>

            </li>
            <br />


            <li className={style.li_vantagens}>

              ✓ Certificado incluso!
            </li>

            <li className={style.li_vantagens}>

              ✓ Material didático incluso!

            </li>


            {/* <li className={style.li_vantagens}>

              ✓  Matrícula gratuita!
            </li> */}

            <li className={style.li_vantagens}>

              ✓  Plantão de dúvidas!
            </li>




          </ul>
          <div className={style.bg_background}></div>

        </div>
      </div>
    </div>
  )

}

