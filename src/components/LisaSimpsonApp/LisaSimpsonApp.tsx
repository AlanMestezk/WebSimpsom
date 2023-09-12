
import { AboutPerson } from "../AboutPerson/AboutPerson"


import lisa from '../../assets/lisa11.png'
import lisa2 from '../../assets/lisa12.png'
import lisaGif from '../../assets/lisaGif1.gif'
import lisaGif2 from '../../assets/lisaGif2.gif'


export const LisaSimpsonApp = ()=>{


   return(
        <>
            <AboutPerson 
                img={lisa}
                name="Lisa Marie Simpson"

                description="
                    Ela é uma menina extremamente inteligente, 
                    possuindo um QI de 156 ou 159, um dos mais altos dentre todos os personagens da série.
                    É a mais jovem budista de Springfield e fez um pequeno discurso quando 
                    Dalai Lama visitou a cidade. Se tornou vegetariana a partir de um episódio que apareceu o 
                    ex-Beatle Paul McCartney, que havia feito essa exigência para aceitar o convite.
                    Ela se sentia triste, sozinha e desanimada, até a cantora Lady Gaga chegar à Springfield, 
                    se tornando Lisa, assim, uma Little Monster em 2012.
                " 
                
                title="Curiosidades sobre Lisa:"
                img2={lisa2} 
                about1="
                    * Lisa chegou a ser dona de uma pônei por um breve período de tempo, 
                    mas devido a falta de dinheiro e o sofrimento de seu pai para 
                    bancar os custos do animal, ela se viu forçada a devolver a criatura
                " 
                about2="
                    * Todos os personagens da família Simpson foram baseados em membros da família de Matt Groening, 
                    criador da série. Bart representa seu irmão Mark. Lisa Simpson foi baseada em Lisa Groening, 
                    que era irmã de Matt. Curiosamente, a irmã de Matt apenas forneceu o nome para a personagem, 
                    já que ele confirmou que as duas Lisas não são nada parecidas.
                " 
                
                moments="
                    Lisa tem varios momentos iconicos na cultura pop,
                    como pode ver abaixo:
                " 

                gif={lisaGif} 
                gif2={lisaGif2} 
            />
        </>
   ) 
}


