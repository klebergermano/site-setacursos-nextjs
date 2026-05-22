
import style from "./page.module.scss"
import SlideHome from "@/components/SlideHome/SlideHome.jsx";
import PainelCursos from "@/components/PainelCursos/PainelCursos";
import Sobre from "@/components/Sobre/Sobre";
import Contato from "@/components/Contato/Contato";
import GoogleReview from "@/components/GoogleReview/GoogleReview";


/*
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  
}
*/

export default function Home() {
  return (
    <>
      <SlideHome />
      <PainelCursos />

      <Sobre />
      {/* <GoogleReview /> */}
      <Contato />
    </>
  );
}
