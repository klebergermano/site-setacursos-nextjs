'use client'
import style from "./sobre.module.scss"
import Image from "next/image";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";

const Sobre = () => {


  return (
    <section id='sobre' className={style.sobre}>
      <div id={style.content}>
        <div>
          <h1 data-aos='zoom-in' data-aos-duration='100'>Quem somos</h1>
          <p data-aos='zoom-in-right' data-aos-duration='1000'>
            <br />
            Nós a SETA CURSOS somos uma escola de cursos livres, que acredita firmemente que
            a chave para uma sociedade melhor começa com uma educação de qualidade.
          </p>

          <p data-aos='zoom-in-left' data-aos-duration='1000'>

            Há mais de 6 anos, nos dedicamos à educação, proporcionando aos nossos alunos uma
            experiência única por meio de cursos completamente personalizados e constantemente
            atualizados. Nesse período, temos aprimorado continuamente nossos programas educacionais,
            assegurando que estejam alinhados com a constante evolução e necessidades do mundo atual.
          </p>
          <p data-aos='zoom-in-right' data-aos-duration='1000'>
            Oferecemos cursos de <strong>Inglês</strong>, <strong>Informática</strong>,
            <strong>Administração</strong>, <strong>Programação</strong>, <strong>Robótica</strong>, <strong>Desenvolvimento Web</strong>, <strong>Excel Avançado</strong> e muito mais!
          </p>


          <p data-aos='zoom-in-left' data-aos-duration='1000'>
            Nossa missão é levar conhecimento de qualidade, de maneira prática e acessível, buscando oferecer uma educação que atenda às necessidades individuais de cada aluno,
            contribuindo para o crescimento pessoal e profissional de todos.
            <b />
          </p>


          <p data-aos='zoom-in-up' data-aos-duration='1000'>


            <LinkScroll
              href='/contato'
              activeClass="active"
              to="contato"
              spy={true}
              smooth={true}
              offset={-60}
              duration={600}> Fale conosco </LinkScroll> e saiba mais!

          </p>


        </div>
        <figure className={style.logo_sobre}>
          <Image src={"/assets/images/logo-2.png"} width={400} height={0} alt='Seta Cursos' loading='lazy' />
        </figure>
      </div>
    </section>
  );
}

export default Sobre;
