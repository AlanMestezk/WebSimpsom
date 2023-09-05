//import { Link } from 'react-router-dom'
//import { useState } from 'react'
import style from './Home.module.css'
//import logo from '../../assets/logoWebSimpsom.png'

//importando o arquivo de slide
import { Swiper, SwiperSlide } from 'swiper/react'
import {  EffectCards} from 'swiper/modules'

import bart from '../../assets/bart.png'
import homer from '../../assets/homer.png'
import lisa from '../../assets/lisa.png'
import maggie from '../../assets/maggie (2).png'
import marge from '../../assets/pngwing.com (10).png'


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
                    <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tenetur labore nihil consequuntur natus dicta et doloremque commodi, esse autem quisquam unde harum mollitia odit optio ipsum voluptas. Error, repudiandae.</strong>

                </section>

                <section>
                <section className={style.persons}>
                        
                        <div className={style.divPerson}>
                            
                            <span>Homer</span>
                             <img className={style.image1} src={homer} alt="homer" />   
                           
                        </div>
    
                        <div className={style.divPerson}>
                            <span>Marge</span>
                            <img className={style.image2} src={marge} alt="marge" />
    
                        </div>
    
                        <div className={style.divPerson}>
                            <span>nome</span>
                            <img className={style.image3} src={bart} alt="bart" />
                            
                        </div>
    
                        <div className={style.divPerson}>
                            <span>nome</span>
                            <img className={style.image4} src={lisa} alt="lisa" />
                            
                        </div>
                        
                        <div className={style.divPerson}>
                            <span>nome</span>
                            <img className={style.image5} src={maggie} alt="maggie" />
                        </div>
    
                    </section>

                </section>

                

            </main>
        </>
    )
}