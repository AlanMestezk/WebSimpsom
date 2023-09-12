import { AboutPerson } from "../AboutPerson/AboutPerson"


import maggie from '../../assets/maggie11.png'
import maggie2 from '../../assets/maggie12.png'
import maggieGif from '../../assets/maggieGIf1.gif'
import maggieGif2 from '../../assets/maggieGIf2.gif'


export const MaggieSimpsonApp = ()=>{


    return(
        <>
            <AboutPerson 
                img={maggie} 
                name="Margaret Evelyn L. Simpson" 
                description="
                    Sua fama se dá por ela frequentemente cair no chão tentando andar e chupando a sua chupeta. 
                    Maggie tem esse nome em homenagem à irmã mais nova do criador Matt Groening,
                    Margaret Maggie Groening.
                    A pequena Maggie está sempre se metendo nas situações mais perigosas. 
                    Contudo, ela sempre depende da ajuda de outras pessoas para se dar bem, 
                    como alguns bebês que ajudaram-na a escapar de uma creche ou quando ursos cuidaram dela 
                    quando ela se perdeu numa floresta. 
                "

                title="Curiosidades sobre Maggie: "
                img2={maggie2} 

                about1="
                    * Na abertura do seriado Maggie é passada na maquina registradora do caixa e custa 
                    847,63 dólares - valor estipulado para criar uma criança nos EUA na década de 1990. 
                    A partir da temporada 21 ela passa a custar 243,26 dólares.
                "

                about2="
                    * Uma vez que com um ano de idade ela já escreveu a equação E=MC² com seus cubos de brinquedo, 
                    enquanto Lisa aos três anos de idade escreveu com cubos de brinquedos a palavra estrela.
                " 
                
                moments="Maggie tem varios momentos iconicos na cultura pop,
                como pode ver abaixo:" 
                gif={maggieGif} 
                gif2={maggieGif2} 
            />
        </>
    )
}