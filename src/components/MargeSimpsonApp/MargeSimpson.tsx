
import { AboutPerson } from "../AboutPerson/AboutPerson"


import marge from '../../assets/marge1.png'
import marge2 from '../../assets/margeIconAbout.jpeg'
import margeGif from '../../assets/MargeGif1.gif'
import margeGif2 from '../../assets/MargeGif2.gif'

export const MargeSimpsonApp = ()=>{


    return (
        <>
            <AboutPerson 
                img={marge} 

                name="Marjorie Jacqueline Bouvier Simpson" 
                
                description="Conhecida como Marge.
                    É a esposa de Homer Simpson e mãe de Lisa, 
                    Bart e Maggie Simpson na série animada Os Simpsons.
                    Ela é mais conhecida por causa de seus longos cabelos azuis, 
                    cujo penteado foi inspirado no filme A Noiva de Frankenstein 
                    e sua personalidade muito paciente." 

                title="Curiosidades sobre Marge: "     

                img2={marge2} 

                about1="* De acordo com Matt Groening, o penteado verticalizado de Marge foi criado com a intenção de esconder 
                    as orelhas de coelho que a personagem originalmente teria. 
                    A ideia era que isso fosse revelado no último episódio, 
                    mas foi decidido que essa característica seria muito ridícula, 
                    até mesmo se tratando de uma série como Os Simpsons." 

                about2="* Na 21ª temporada, Marge e Homer se juntam à equipe olímpica depois que ela descobre seu amor pelo curling. 
                    Após conquistar o título, 
                    Marge revela que conseguiu vencer usando a mão esquerda porque 
                    é ambidestra. Na verdade, ela nasceu canhota, 
                    mas praticava o uso da mão direita dede a infância para que outras 
                    crianças não zombassem. Como resultado, 
                    ela consegue usar as duas mãos perfeitamente." 

                    
                moments="Marge tem varios momentos 
                    iconicos na cultura pop,
                    como pode ver abaixo:" 

                gif={margeGif} 

                gif2={margeGif2} 

            />
        </>
    )
}