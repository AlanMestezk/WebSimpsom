import {Link} from 'react-router-dom'

import style from './About.module.css'

import logoReact from '../../assets/react (1).png'
import logoTypesCript from '../../assets/typescript.png'
import logoVite from '../../assets/vite-js-logo.svg'

interface AboutProps{
    title: string
    description: string
}

export const AboutApp = ({title, description}: AboutProps)=>{

    return(
        <>
            <main className={style.main}>

                <section className={style.containerTitle}>

                    <h1>{title}</h1>
                    <strong>{description}</strong>

                </section>

                <section className={style.containerTool1}>

                    <h3>Ferramentas utilizadas neste projeto foram:</h3>

                </section>

                <section className={style.containerTool}>

                    <div className={style.divLogo}>

                        <div className={style.containerImg}>
                            <img 
                                className={style.logo}
                                src={logoReact}
                                alt="react"
                            />
                        </div>

                        <div className={style.nomeLogo}>
                            <strong>REACT</strong>
                            <Link to='https://pt-br.legacy.reactjs.org/docs/getting-started.html'>
                                <span>Saiba mais</span>
                            </Link>
                        </div>

                    </div>

                    <div className={style.divLogo}>

                        <div className={style.containerImg}>
                            <img 
                                className={style.logo}
                                src={logoTypesCript} 
                                alt="typescript"
                            />

                        </div>

                        
                        <div className={style.nomeLogo}>
                            <strong>TYPESCRIPT</strong>
                            <Link to='https://www.typescriptlang.org/pt/docs/'>
                                <span>Saiba mais</span>
                            </Link>
                        </div>

                    </div>

                    <div className={style.divLogo}>

                        <div className={style.containerImg}>

                            <img 
                                className={style.logo}
                                src={logoVite}
                                alt="vite"
                            />
                        </div>

                        
                        <div className={style.nomeLogo}>
                            <strong>VITE</strong>
                            
                            <Link to='https://vitejs.dev'>
                                <span>Saiba mais</span>
                            
                            </Link>
                        </div>

                    </div>
                    
                </section>

                <section className={style.footer}>

                    <div className={style.descriptionFooter}>

                        <h2>Neste projeto tambem foi utlizado:</h2>
                        <h3>CSS3 e HTML5</h3>

                        <h3>Toda a documentação deste projeto se encontra no GitHub</h3>
                        <h3>Link de acesso ao projeto: </h3>

                        <Link to='https://github.com/AlanMestezk/WebSimpsom'>
                            <strong>Projeto GitHub</strong>
                        </Link>

                    </div>

                </section>

            </main>
        </>
    )
} 