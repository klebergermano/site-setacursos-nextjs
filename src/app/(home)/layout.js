

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import globals from "@/styles/globals.scss"
import { MdDescription } from "react-icons/md";


export const metadata = {
  title: "Seta Cursos",
  description: "Cursos de T.I, Programação, Informática, Excel, Inglês e Tecnologia com foco prático para o mercado de trabalho.",

  keywords: [
    "curso de T.I",
    "curso de Tecnologia da Informação",
    "curso de programação",
    "curso de informática",
    "curso de excel",
    "curso de inglês",
    "seta cursos"
  ],
  authors: [{ name: "Seta Cursos" }],


};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,

}

export default function RootLayout({ children }) {



  return (
    <html lang="pt-br">
      <body>
        <Header />
        <div className="container-global">
          {children}
          <Footer />

        </div>
      </body>
    </html>
  );
}
