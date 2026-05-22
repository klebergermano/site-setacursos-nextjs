import style from "../pages-cursos.module.scss"

import NavCursos from "../_common/_NavCursos/NavCursos"
import _itemsNav from "./_itemsNavCursos";
import VantagensCurso from "./Lateral/VantagensCurso";
import NavLateralCursos from "../_common/_NavLateralCursos/NavLateralCursos";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Inglês Geral",
    description: `Aprenda inglês de maneira eficaz em um curso completo! Aulas práticas e interativas para jovens e adultos. Entre em contato e inicie sua jornada para fluência!`,

};



export default function Layout({ children }) {

    return (
        <div className={`${style.pages_informatica} pages`}>
            <NavCursos itemsNav={_itemsNav} />
            <div className={style.bg_content_page}>

                {children}

                <aside className={style.aside}>

                    <div className={style.promo}>
                        <Link href={'/cursos/ingles/ingles-completo'}>
                            <Image width={300} height={300} src={'/assets/images/promos/ingles-01.webp'} />
                        </Link>
                        <Link href={'/cursos/informatica/informatica-jovem'}>
                            <Image width={300} height={300} src={'/assets/images/promos/informatica-01.webp'} />
                        </Link>
                        <Link href={'/cursos/robotica/robotica-maker'}>
                            <Image width={300} height={300} src={'/assets/images/promos/robotica-01.webp'} />
                        </Link>
                    </div>

                    <NavLateralCursos itemsNav={_itemsNav} title={"Cursos de Inglês"} />

                    {/* <VantagensCurso /> */}

                </aside>
            </div>
        </div>
    );
}
