'use client'
const OPTIONS = { dragFree: true, loop: true }


import EmblaCarousel from './EmblaCarousel'


export default function Modulo({ slideObj, title }) {
    return (


        <EmblaCarousel slides={slideObj} title={title} options={OPTIONS} />

    )


}