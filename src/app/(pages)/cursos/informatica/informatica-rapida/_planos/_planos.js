import style from "./_planos.module.scss"

export default function Planos() {

  return (
    <div className={style.bg_planos}>
      <h3>Planos Disponíveis</h3>
      <div className={style.planos}>
        <h4>Informática Rápida</h4>
        <p>Focado no ambiente de trabalaho</p>
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
            6 meses / 48 horas <br />
            <span className={style.txt_pequeno}>
              (Acompanhamos o seu ritmo)
            </span>

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
      <div className={style.planos}>
        <h4>Informática Intesiva</h4>
        <p>Focado no ambiente de trabalaho</p>

        <ul>
          <br />
          <li>
            <span className={style.txt_highlight}> 4 Aulas por semana </span><br />
            <span className={style.txt_pequeno}>(1 horas p/ aula)</span>
          </li>

          <li className={style.preco}>
            R$ <b><span className={style.valor_destaque}>250</span>,00</b><br />
            <span className={style.txt_pequeno}>(mensalidade)</span>
          </li>

          <li>
            3 meses / 48 horas <br />
            <span className={style.txt_pequeno}>
              (Mais rápido com mais aulas)</span>

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
  )

}

