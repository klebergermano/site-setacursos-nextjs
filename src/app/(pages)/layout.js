

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import globals from "@/styles/globals.scss"
import Contato from "@/components/Contato/Contato";


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

export default function RootLayout({ children }) {



  return (
    <html lang="pt-br">
      <body>
        <Header />
        <div className="container-global">
          {children}
          <Contato />
          <Footer />

        </div>
      </body>
    </html>
  );
}
