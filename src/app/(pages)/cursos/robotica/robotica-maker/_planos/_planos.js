import style from "./_planos.module.scss"
import Image from "next/image"
export default function Planos() {

  return (
    <div className={style.bg_planos}>
      <h2>Plano Disponível</h2>
      <div className={style.planos}>
        <span className={style.red_block}></span>
        <ul>
          {/* <p>Básico, Intermediário e Avançado</p> */}

          <ul>
            <li>
              2 Aulas por semana <br />
              <span className={style.txt_pequeno}>(1 horas p/ aula)</span>
            </li>
            <li className={style.preco}>
              R$ <b><span className={style.valor_destaque}>159</span>,00</b><br />
              <span className={style.txt_pequeno}>(mensalidade)</span>
            </li>
            <li>
              12 meses / 96 horas <br />
              <span className={style.txt_pequeno}>
                (por etapa)
              </span>
            </li>
          </ul>

          <li className={style.li_vantagens}>
            ✓ Certificado incluso!
          </li>
          <li className={style.li_vantagens}>
            ✓ Material didático acessível!
          </li>
          {/* <li className={style.li_vantagens}>
            ✓  Matrícula gratuita!
          </li> */}
          <li className={style.li_vantagens}>
            ✓  Plantão de dúvidas!
          </li>
          <li className={style.li_vantagens}>

            ✓   Turmas reduzidas!
          </li>
          <li className={style.li_vantagens}>

            ✓   Professor em sala!
          </li>
          {/* <li className={style.li_vantagens}>

            ✓  LIVRE de Taxas e Multas!
          </li> */}
        </ul>
        <div>
          <h3 className={style.title}>

            Robótica Maker
            <span>Despertando mentes criativas com tecnologia!</span>

          </h3>
          <figure>

            <Image width={400} height={500} src={"/assets/images/cursos/robotica/plano-robotica-maker.webp"} />
          </figure>
        </div>


        <div className={style.bg_background}></div>


      </div>


    </div>
  )

}

