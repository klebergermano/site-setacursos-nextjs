import React, { useCallback } from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay'
import style from "./embla.module.scss"
import Image from 'next/image'

import useEmblaCarousel from 'embla-carousel-react'

const EmblaCarousel = (props) => {
  console.log("PROPS:", props)
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  )

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <>
      <h3 className={style.title}>{props.title ? props.title : "Módulos do Curso"}</h3>
      <section className={style.embla}>

        <div className={style.embla__controls}>
          <div className={style.embla__buttons}>
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>

          <div className="embla__dots">
            {scrollSnaps.map((item, index) => (
              <>

                <DotButton
                  btnTxt={props.slides[index].nome}
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={'embla__dot'}
                  id={index === selectedIndex ? 'embla__dot__selected' : 'falso'}
                ></DotButton>
              </>
            ))}
          </div>
        </div>
        <div className={style.embla__viewport} ref={emblaRef}>
          <div className={style.embla__container}>
            {slides.map((item, index) => (

              <div className={style.embla__slide} key={index}>
                <div className={style.embla__slide__number}>
                  <h2>{item.nome}</h2>
                  <div className={style.resumo}>
                    <div dangerouslySetInnerHTML={{ __html: item.resumo }}>
                      {/* <p>
                      {item.resumo}
                    </p> */}
                    </div>
                    <figure>
                      <Image width={300} height={220} src={`/assets/images/cursos/excel/${item.imgUrl}`} />
                    </figure>
                  </div>

                  {item.c_pragmatico ?
                    (
                      <div className={style.c_pragmatico}>
                        <h4>Conteúdo Progamático</h4>
                        <ul dangerouslySetInnerHTML={{ __html: item.c_pragmatico }} />
                      </div>
                    )
                    :
                    ''}

                </div>
              </div>
            ))}
          </div>
        </div>


      </section>
    </>
  )
}

export default EmblaCarousel
