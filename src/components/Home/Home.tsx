//import { Link } from 'react-router-dom'
//import { useState } from 'react'
import style from './Home.module.css'
//import logo from '../../assets/logoWebSimpsom.png'

//importando o arquivo de slide
import { Swiper, SwiperSlide } from 'swiper/react'
import {  EffectCards} from 'swiper/modules'

import bart from '../../assets/BartW.png'
import homer from '../../assets/HomerW.png'
import lisa from '../../assets/LisaW.png'
import maggie from '../../assets/MaggieW.png'
import marge from '../../assets/pngwing.com (8).png'

interface HomeProps{
    title: string
    subtitle?: string
}

export const HomeApp = ({title, subtitle}: HomeProps)=>{


    const data = [
        {id: '1', image:'https://rare-gallery.com/thumbs/583363-the-simpsons.jpg'},
        {id: '2', image:'https://images4.alphacoders.com/114/1148429.jpg'},
        {id: '3', image:'https://wallpaperaccess.com/full/2439363.jpg'},
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

                
                <section className={style.sectiontile}>

                    <h1 className={style.title}>{title}</h1>
                    <strong>
                        A FAMILIA AMARELA MAIS AMADA DO MUNDO AGORA TEM COMUNIDADE!
                    </strong>
                    <h2>
                       clique nos icones abaixo e descubra curiosidades sobre eles
                    </h2>

                </section>

               
                <section className={style.persons}>
                       
                        <div className={style.divPerson}>
                            <img 
                                className={style.image} 
                                src={homer} 
                                alt="homer" 
                            />
                            <div>
                                <strong>Homer</strong>
                            </div>
                        </div>

                        <div className={style.divPerson}>
                            <img 
                                className={style.image} 
                                src={marge} 
                                alt="marge" 
                            />
                            <div>
                                <strong>Marge</strong>
                            </div>
                        </div>

                        <div className={style.divPerson}>
                            <img 
                                className={style.image} 
                                src={bart} 
                                alt="bart" 
                            />
                            <div>
                                <strong>Bart</strong>
                            </div>
                        </div>

                        <div className={style.divPerson}>
                            <img 
                                className={style.image} 
                                src={lisa} 
                                alt="lisa" 
                            />
                            <div>
                                <strong>Lisa</strong>
                            </div>
                        </div>

                        <div className={style.divPerson}>
                            <img 
                                className={style.image} 
                                src={maggie} 
                                alt="maggie" 
                            />
                            <div>
                                <strong>Maggie</strong>
                            </div>
                        </div>

                </section>

            </main>
        </>
    )
}