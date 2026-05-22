import style from "../pages-cursos.module.scss"

import NavCursos from "../_common/_NavCursos/NavCursos"
import _itemsNav from "./_itemsNavCursos";
import VantagensCurso from "./Lateral/VantagensCurso";
import Image from "next/image";
import Link from "next/link";
import NavLateralCursos from "../_common/_NavLateralCursos/NavLateralCursos";
export const metadata = {
    title: "Create Next App",
    description: "Seta home page",

};




export default function Layout({ children }) {




    return (
        <div className={`${style.pages_informatica} pages`}>
            {/* <NavCursos itemsNav={_itemsNav} /> */}
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
                        <Link href={'/cursos/informatica/informatica-jovem'}>
                            <Image width={300} height={300} src={'/assets/images/promos/robotica-01.webp'} />
                        </Link>
                    </div>
                    {/* <NavLateralCursos itemsNav={_itemsNav} title={"Cursos de Informática"} /> */}

                    {/* <VantagensCurso /> */}

                </aside>
            </div>
        </div>
    );
}
