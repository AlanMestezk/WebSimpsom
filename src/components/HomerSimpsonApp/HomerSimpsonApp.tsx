import { AboutPerson } from "../AboutPerson/AboutPerson"

import homerAbout from '../../assets/homerAbout.png'
import homerAbout2 from '../../assets/homerAbout2.png'
import homerGif from '../../assets/homerGif.gif'
import homerGif2 from '../../assets/homerGif2.gif'


export const HomerSimpsonApp = ()=>{

    return(

        <>
            <section>
                <AboutPerson 
                    img= {homerAbout}
                    
                    name="Homer Jay Simpson" 
                    
                    description="Mais conhecido como Homer Simpson, ele é o pai da família Simpson. 
                    Um indivíduo com sobrepeso, preguiçoso, alcoólatra e 
                    ignorante, mas é fortemente dedicado à sua esposa e filhos. 
                    Apesar disso e sua inteligência abaixo da média, 
                    ele mostrou momentos de grande intelecto, e pode ser um 
                    pai atencioso e um bom marido às vezes." 

                    title='Curiosidades sobre Homer:'

                    img2={homerAbout2}
                        
                    about1="*Groening inicialmente desenhou Homer com as letras G e M (iniciais do seu nome) 
                        intencionalmente visíveis na lateral da cabeça do personagem. 
                        O G foi trabalhado no ouvido de Homer, 
                        enquanto que o M representava a solitária linha do cabelo acima da orelha. 
                        A animação foi desenvolvida e retocada desde então, 
                        mas Groening ainda desenha dessa forma quando faz esboços para os fãs."  
                    
                    about2="*O bordão de Homer foi adicionado ao Oxford English Dictionary em 2001,[1] sem apóstrofo. Seu significado é: frustração quando as coisas não saem como o previsto, ou quando alguém fez alguma coisa bem cretina!
                        A palavra falada D'oh é marca registrada da 20th Century Fox.[2]
                        Em 2006, D'oh! ficou em 6º na Lista dos 100 maiores bordões da TV da TV Land.3 - 4 "
                        
                    moments="Homer tem varios momentos iconicos na cultura pop,
                        como pode ver abaixo:"
                    
                    gif={homerGif}
                    gif2={homerGif2}

                />
            </section>
        </>
    )
}