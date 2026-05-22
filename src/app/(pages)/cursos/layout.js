
import globals from "@/styles/globals.scss"

import style from "./layout.module.scss";


export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,

}



export default function RootLayout({ children }) {

  return (
    //Layout Cursos
    <div className={`${style.layout_container}`}>

      {children}

    </div>
  );
}