import style from './Contact.module.css'

import github from '../../assets/github.png'
import gmail from '../../assets/gmail.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import logoCreator from '../../assets/iCon.jpg'
import { Link } from 'react-router-dom'


export const ContactApp = ()=>{

    return(
        <main className={style.container}>
            
            <section className={style.containerTitle}>
                <h1>CONTATOS</h1>
                <strong>abaixo estão os dados do iniciador do projeto</strong>

            </section>
            
            <section className={style.containerData}>

                <div className={style.sectionIcon}>
                    <img 
                        src={logoCreator}
                        alt="creator"
                        className={style.logoCreator}
                     />
                </div>

                <div className={style.sectionDataCreator}>
                    
                    <h2>Alan Mestezk</h2>
                    <p>DESENVOLVEDOR REACT JR</p>
                    <strong>APERFEIÇOANDO O DESENVOLVIMENTO WEB</strong>

                </div>
                
                <section className={style.containerNetwork}>

                    <div className={style.networks}>

                        <div className={style.sectionNet}>

                            <img
                                className={style.iconsNetwork} 
                                src={github}
                                alt="github"
                            />
                        </div>
                        
                        <div className={style.titleIcons}>
                            <strong>GitHub</strong>

                            <Link to='https://github.com/AlanMestezk'>
                                <span>Saiba mais</span>
                            </Link>
                        </div>

                    </div>
                    <div className={style.networks}>

                        <div className={style.sectionNet}>
                            <img
                                className={style.iconsNetwork} 
                                src={gmail}
                                alt="gmail"
                            />

                        </div>
                        
                        <div className={style.titleIcons}>
                            <strong>Gmail</strong>

                            <Link to='https://mail.google.com/mail/u/0/#inbox'>
                                <span>Saiba mais</span>
                            </Link>
                        </div>

                    </div>
                    <div className={style.networks}>

                        <div className={style.sectionNet}>

                            <img
                                className={style.iconsNetwork} 
                                src={instagram} 
                                alt="instagram"
                            />
                        </div>
                        
                        <div className={style.titleIcons}>
                            <strong>Instagram</strong>

                            <Link to='https://instagram.com/alanmestezk'>
                                <span>Saiba mais</span>
                            </Link>
                        </div>

                    </div>
                    <div className={style.networks}>
                        <div className={style.sectionNet}>
                            <img
                                className={style.iconsNetwork} 
                                src={linkedin}
                                alt="linkedin"
                            />

                        </div>

                        
                        <div className={style.titleIcons}>
                            <strong>Linkedin</strong>

                            <Link to='https://www.linkedin.com/in/alan-mestezk-9b86a2154/'>
                                <span>Saiba mais</span>
                            </Link>
                        </div>

                    </div>

                </section>

            </section>

            <section className={style.footer}>
                <h2>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe dolor nemo consequuntur quidem tenetur! Rem, assumenda non. Eius, distinctio blanditiis ut placeat explicabo iure similique ad provident, cupiditate voluptatum eaque?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda alias incidunt, quia odit quibusdam enim delectus illo eligendi? Dolore similique eos dolorem sequi illo voluptatibus ipsum beatae dolores cupiditate distinctio?
                </h2>

            </section>

        </main>
    )
}