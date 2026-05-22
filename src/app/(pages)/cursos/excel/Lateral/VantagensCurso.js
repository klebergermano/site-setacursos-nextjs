import style from "./vantagens-cursos.module.scss";
export default function _vantagensCurso() {
    return (
        <div className={style.vantagens_curso}>
            <h3>Vantagens Inclusas!</h3>
            <ul>
                {/* <li><span className={style.icon_checked}>&#10003;</span> CERTIFICADO de Conclusão!</li> */}
                {/* <li><span className={style.icon_checked}>&#10003;</span> Material GRATUITO!</li> */}
                {/* <li><span className={style.icon_checked}>&#10003;</span> Matrícula GRATUITA!</li> */}
                <li><span className={style.icon_checked}>&#10003;</span> Material Atualizado!</li>
                <li><span className={style.icon_checked}>&#10003;</span> Plantão de Dúvidas!</li>
                <li><span className={style.icon_checked}>&#10003;</span> Turmas Reduzidas!</li>
                <li><span className={style.icon_checked}>&#10003;</span> Professor em Sala!</li>
                <li><span className={style.icon_checked}>&#10003;</span> LIVRE de Taxas!</li>
                <li><span className={style.icon_checked}>&#10003;</span> LIVRE de Multas!</li>


                <li><span className={style.icon_checked}>&#10003;</span> Preço Acessível!</li>
            </ul>
        </div>

    )

}