//import { Link } from 'react-router-dom'
//import { useState } from 'react'
import style from './Home.module.css'
//import logo from '../../assets/logoWebSimpsom.png'

//importando o arquivo de slide
import { Swiper, SwiperSlide } from 'swiper/react'
import {  EffectCards} from 'swiper/modules'


interface HomeProps{
    title: string
    subtitle: string
}

export const HomeApp = ({title, subtitle}: HomeProps)=>{


    const data = [
        {id: '1', image:'https://wallpaperaccess.com/full/2439222.jpg'},
        {id: '2', image:'https://images4.alphacoders.com/114/1148429.jpg'},
        {id: '3', image:'https://rare-gallery.com/thumbs/583363-the-simpsons.jpg'},
        {id: '4', image:'https://rare-gallery.com/thumbnail/460447-The-Simpsons-Homer-Simpson-Marge-Simpson-Bart-Simpson.png'},
        {id: '5', image:'https://wallpaperaccess.com/full/2439440.jpg'}
    ]

    return(
        <>
            <main className={style.container}>

                <section>

                    <Swiper
                        modules={[EffectCards]}
                        effect='cards'
                        slidesPerView={1}
                        pagination={{clickable: true}}
                        navigation
                        className={style.swiper}
                    >
                        {
                            //aqui vou percorrer o array data colocando as img dentro do swiperslide
                            data.map(
                                (i: any)=>(
                                    <SwiperSlide key={i.id}>

                                        <img 
                                            src={i.image} 
                                            alt="slide" 
                                            className={style.slideItem}
                                        />

                                    </SwiperSlide>
                                )
                            )
                        }
                    </Swiper>

                </section>

                
                <section>

                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>

                </section>

            </main>
        </>
    )
}