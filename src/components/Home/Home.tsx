//import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
import matt from '../../assets/matt.jpg'
import load from '../../assets/Loadindingg.gif'


interface HomeProps{
    title: string
    subtitle?: string
}

export const HomeApp = ({title, subtitle}: HomeProps)=>{

    const [isLoad, setIsload] = useState(true)

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

    useEffect(
        ()=>{
            setTimeout(
                () => {
                    setIsload(false)
                }, 2000
            )
        }, []
    )


    const data = [
        {id: '1', image:'https://rare-gallery.com/thumbs/583363-the-simpsons.jpg'},
        {id: '2', image:'https://images4.alphacoders.com/114/1148429.jpg'},
        {id: '3', image:'https://wallpaperaccess.com/full/2439363.jpg'},
        {id: '4', image:'https://rare-gallery.com/thumbnail/460447-The-Simpsons-Homer-Simpson-Marge-Simpson-Bart-Simpson.png'},
        {id: '5', image:'https://wallpaperaccess.com/full/2439440.jpg'}
    ]

    if(isLoad){
        return(
            <>  
                <main className={style.mainLoad}>

                    <img
                        src={load}
                        alt="carregando"
                        className={style.imgLoad}
                    />
                </main>
            </>
        )
    }

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
                       clique nos icones abaixo e descubra curiosidades sobre os integrantes dos simpsons
                    </h2>

                </section>

               
                <section className={style.persons}>
                       
                        <Link to='/homer-simpson-about'>
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
                        </Link>

                        <Link to='/marge-simpson-about'>
                        
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
                        </Link>

                        <Link to='/bart-simpson-about'>

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
                        </Link>

                        <Link to='/lisa-simpson-about'>
                        
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
                        </Link>
                        
                        <Link to='/maggie-simpson-about'>

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
                        
                        </Link>


                </section>

                <section className={style.containerCre}>

                        <div className={style.creTitle}>

                                <h3>Aqui vai um breve resumo de como surgiu a serie:</h3>
                                <h2>
                                    Groening concebeu a ideia para os Simpsons no saguão do escritório de James L. Brooks e rapidamente esboçou sua versão de uma família disfuncional: Homer, o pai obeso; Marge, a mãe esguia; Bart, o filho mais velho malcriado; Lisa, a filha inteligente do meio; e Maggie, a bebê.
                                </h2>
                                
                                <div>
                                    <img 
                                        className={style.mattImage}
                                        src={matt} 
                                        alt="Matt Groening"
                                     />

                                    <strong>
                                        <Link to='https://pt.wikipedia.org/wiki/Matt_Groening'>
                                            Saber mais
                                        </Link>
                                    </strong>
                                    

                                </div>


                        </div>

                </section>

            </main>
        </>
    )
}