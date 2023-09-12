
import { Link } from 'react-router-dom'
import style from './AboutPerson.module.css'
import { useEffect } from 'react'

interface AboutPersonProps{
    img: string
    name: string
    description: string
    about1: string
    about2: string
    img2: string
    gif: string
    gif2: string
    moments: string
    title: string
}

export const AboutPerson = ({img, name, description, about1, about2, img2, gif, gif2, moments, title}: AboutPersonProps) =>{

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    return(

        <>
            <main className={style.main}>

                <section className={style.containerPerfil}>

                    <div className={style.perfil}>

                        <div className={style.imgPerfil}>

                            <img 
                                src={img} 
                                alt="Icone do personagem"
                                className={style.img}
                            />
                        </div>
                        
                        <div className={style.divName}>

                            <h1>{name}</h1>
                        </div>

                        <div className={style.personAbout}>

                            <strong>{description}</strong>
                        </div>

                    </div>
                </section>



                <section className={style.aboutContainer}>

                        <div className={style.aboutPerson}>

                            <h4>{title}</h4>

                            <div className={style.imgAbout}>
                                
                                <img 
                                    src={img2} 
                                    alt="personagem icon"
                                    className={style.imgIcon} 
                                />

                            </div>

                            <div className={style.textAbout}>
                                <p className={style.about}>{about1}</p>
                                <p className={style.about}>{about2}</p>
                            </div>
                            
                        </div>

                </section>


                <section className={style.footer}> 
                


                    <div className={style.containerGif}>

                        <div className={style.divMoments}>

                            <strong> {moments}</strong>

                        </div>

                        <div>
                            <img 
                                src={gif} 
                                alt= 'gif icon'
                                className={style.gif1}
                            />

                            <img 
                                src={gif2} 
                                alt= 'gif icon'
                                className={style.gif2}
                            />

                        </div>
                        
                    </div>

                </section>

                <section className={style.footer}>

                    <div className={style.divButtonFooter}>

                        <Link to='/'>
                            HOME
                        </Link>

                    </div>

                </section>
  
                
            </main>
        </>
    )
}