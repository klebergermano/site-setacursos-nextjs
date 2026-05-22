import style from "./_planos.module.scss"
import Image from "next/image"
export default function Planos() {

  return (
    <div className={style.bg_planos}>
      <h2>Planos Disponíveis</h2>
      <div className={style.planos}>
        <span className={style.red_block}></span>
        <ul>

          <ul>
            <li>
              2 Aulas por semana <br />
              <span className={style.txt_pequeno}>(1 horas p/ aula)</span>
            </li>
            <li className={style.preco}>
              R$ <b><span className={style.valor_destaque}>179</span>,00</b><br />
              <span className={style.txt_pequeno}>(mensalidade)</span>
            </li>
            <li>
              6 meses / 48 horas <br />
              <span className={style.txt_pequeno}>

              </span>
            </li>
          </ul>

          <li className={style.li_vantagens}>
            ✓ Certificado incluso!
          </li>
          <li className={style.li_vantagens}>
            ✓  Plantão de dúvidas!
          </li>
          <li className={style.li_vantagens}>

            ✓   Turmas reduzidas!
          </li>
          <li className={style.li_vantagens}>

            ✓   Professor em sala!
          </li>
          <li className={style.li_vantagens}>

            ✓  LIVRE de Taxas e Multas!
          </li>
        </ul>
        <div>
          <h3 className={style.title}>

            Excel Avançado
            <span>Com as prinficais funções do mercado</span>

          </h3>
          <figure>

            {/* <Image width={400} height={500} src={"/xassets/images/cursos/ingles/plano-ingles-completo.png"} /> */}
          </figure>
        </div>


        <div className={style.bg_background}></div>


      </div>


    </div>
  )

}

