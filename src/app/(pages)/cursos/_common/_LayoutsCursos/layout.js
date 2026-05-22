
import globals from "@/styles/globals.scss"

import style from "./page.module.scss";

export const metadata = {
    title: "Create Next App",
    description: "Seta home page",

};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,

}

export default function Layout({ children }) {



    return (

        <div className={`${style.container}`}>

            {children}
        </div>
    );
}
