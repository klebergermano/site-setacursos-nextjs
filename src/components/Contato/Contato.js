'use client'

import FormNetlify from "./formNetlify/_formNetlify";
import Info from "../_infoContatoObj";
import Icon from "@/../public/assets/icons";
import style from "./contato.module.scss";
import InfoContato from "../_infoContatoObj";
import { IoChatbubblesOutline } from "react-icons/io5";
import Image from "next/image";
function Contato(props) {

  return (
    <section
      id="contato" className={style.contato}>
      <div className={style.content}>
        <h1>
          <IoChatbubblesOutline />

          Fale Conosco

        </h1>

        <div className={style.block_content} data-aos='zoom-in'>
          <div className={style.clmn_block}>
            <div className={style.info_contato} data-aos='zoom-in-right'>
              <div className={style.row}>
                <div className={style.clmn}>
                  <p>
                    Entre em contato pelo nosso número ou nos chame no WhatsApp:
                    <span className={style.span_telefone}>
                      <Icon name="cellphone" className={style.icon} />

                      {InfoContato.telefone}&nbsp;
                      <Icon name="whatsapp" className={style.icon} />
                    </span>
                  </p>
                </div>{/*clmn */}
                <div className={style.clmn}>
                  <a className={style.btn_whatsapp} target='_blank' href={`https://wa.me/5511943993338`}>
                    <Icon name="whatsapp" className={style.icon} />
                    Chamar no WhatsApp
                  </a>
                </div>{/*clmn */}
              </div>{/*---- div row ----*/}

              <div className={style.row}>
                <p className={style.txt_redes_sociais}>Conheça também nossas redes sociais!</p>

                <a className={`${style.btn_redesocial} ${style.btn_facebook}`} id={style.btn_facebook} target="_blank" href={Info.facebook}>
                  <Icon name="facebook" className="icon facebook" />
                  Seta Cursos
                </a>

                <a className={`${style.btn_redesocial} ${style.btn_instagram}`} id={style.btn_instagram} target="_blank" href={Info.instagram}>
                  <Icon name="instagram" className="icon instagram" />
                  @Seta Cursos
                </a>

              </div>{/*---- div row ----*/}




              <div className={style.row}>

                <p className={style.infoContato} id={style.email}>
                  <Icon name="email" className={style.icon} />
                  {InfoContato.email}
                </p>
                <p className={style.infoContato} id={style.endereco}>
                  {InfoContato.endereco} - {InfoContato.bairro}
                </p>
                <p className={style.infoContato} id={style.endereco}>
                  {InfoContato.cep} - {InfoContato.cidade}
                </p>

                <div className={style.bg_map}>
                  <figure>

                    <Image width='200' height='0' src={"/assets/images/empresa-local.webp"} />
                  </figure>
                  <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58433.24167226776!2d-46.72758612692002!3d-23.74461187340801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce49ce5dd65215%3A0x8dcca9f16e4895c1!2sSeta%20Cursos!5e0!3m2!1spt-BR!2sbr!4v1706311605598!5m2!1spt-BR!2sbr"
                      allowfullscreen="" loading="lazy" title="Mapa Endereço Seta Cursos"
                      referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
              </div>{/*---- div row ----*/}

            </div>{/*info contato */}


          </div>{/*clmn_block*/}
          <div className={style.clmn_block} data-aos='zoom-in-up'>

            <FormNetlify />
          </div>

        </div>

      </div>
    </section>

  );
}


export default Contato;
