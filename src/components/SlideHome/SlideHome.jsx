'use client'

import { Link as LinkScroll } from "react-scroll";
import styles from "./slide_home.module.scss"
import dynamic from 'next/dynamic';
import ReactPlayer from "react-player";
import { Suspense, useState } from "react";
import Loading from "../Loading/loading";
import { useEffect } from "react";
import { isMobile } from 'react-device-detect';


import AOS from 'aos';
import 'aos/dist/aos.css'




function SlideHome() {
  const [urlVideo, setUrlVideo] = useState('seta-cursos-ingles-informatica.mp4')

  useEffect(() => {

    if (isMobile) setUrlVideo('seta-cursos-ingles-informatica-mobile.mp4')

    AOS.init({ duration: 500 });
    const slide = document.querySelector('#info_slide');

    setTimeout(() => {
      slide.style.width = '400px'
      slide.style.top = '50%'
      slide.style.opacity = '1.0'
    }, 0)

  }, []);

  return (
    <div id='bg_slide_home  ' className={styles.bg_slide_home}>

      <div id='slide_home' className={styles.slide_home}>


        <div id="info_slide" className={styles.info_slide} >
          <h1  >Procurando por cursos de <br /> <strong>Inglês</strong>, <strong>Informática</strong> e
            <strong> Profissionalizantes</strong>?</h1>
          <p >Nós podemos te ajudar!</p>

          <LinkScroll

            className="a-sem-link"

            activeClass="active"
            to="painel_cursos"
            spy={true}
            smooth={true}
            offset={0}
            duration={600}
          >
            Conhecer Cursos <span>&#8249;</span>
          </LinkScroll>
        </div>
        <div id="bg_scanlines"></div>

        <ReactPlayer
          id="video_slide"
          url={`/assets/videos/${urlVideo}`}
          width="100%"
          height="100%"
          loop
          playing
          muted
          // picture in picture
          pip={true}

        ></ReactPlayer>

      </div>
    </div >
  );

};

export default SlideHome;
