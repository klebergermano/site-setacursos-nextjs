import style from "./_planos.module.scss"

export default function Planos() {

  return (
    <div className={style.bg_planos}>
      <h3>Planos Disponíveis</h3>
      <div className={style.planos}>
        <h4>Informática Essencial</h4>
        <p>Básico e Intermediário</p>
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
      <div className={style.planos}>
        <h4>Informática Completa</h4>
        <p>Básico, Intermediário e Avançado</p>
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
  )

}

