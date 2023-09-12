
import { AboutPerson } from "../AboutPerson/AboutPerson"

import bart from '../../assets/bart11.png'
import bart2 from '../../assets/bart12.png'
import bartGif from '../../assets/bartGif1.gif'
import bartGif2 from '../../assets/bartGif2.gif'

export const BartsimpsonApp = ()=>{



    return(
        <>
            <AboutPerson 
                img={bart}

                name="Bartholomew J. Simpson" 

                description="Também conhecido como Bart Simpson, ou apenas Bart, (1 de abril de 1980) 
                    é o filho mais velho da família Simpson. O personagem é retratado como um menino rebelde e 
                    desobediente que tem más notas na escola. 
                    Este comportamento o deixa frequentemente em situações difíceis com as pessoas que trabalham em sua escola, 
                    com sua família, e com estranhos." 
                
                title="Curiosidades sobre Bart"

                img2={bart2} 

                about1="*  Bart e suas irmãs, Lisa e Maggie, são descendentes de franceses porque o 
                    pai de Marge, Clancy Bouvier, é cidadão francês. No entanto, 
                    ele é o único da família que realmente fala francês. 
                    Bart aprendeu o idioma depois de uma viagem de intercâmbio escolar para a 
                    França no início da série." 

                about2="* Marge chegou a passar 53 horas em trabalho de parto antes de Bart 
                    finalmente nascer. 
                    Talvez isso ajude a explicar o fato de ela sempre frisar que as 
                    mães devem ser respeitadas em todos os momentos." 

                moments="Bart tem varios momentos iconicos na cultura pop,
                        como pode ver abaixo:" 
                
                gif={bartGif2}
                gif2={bartGif}

            />
        </>
    )
}