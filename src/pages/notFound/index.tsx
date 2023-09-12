import {Link} from 'react-router-dom'
import style from './NotFound.module.css'

import imgError from '../../assets/Simpsons-404.jpg'

export const NotFound = ()=>{


    return(
        <>
            <main className={style.container}>

                <div className={style.divImg}>

                    <img 
                        src={imgError} 
                        alt="Imagem de erro/ error 404"
                    />

                </div>

                <div className={style.divText}>
                    
                    <h1>ACHO QUE VOCÊ SE PERDEU!</h1>
                    <strong>Esta página não existe</strong>

                </div>

                <div className={style.divButton}>
                    
                    <div>
                        <Link to='/'>
                            HOME
                        </Link>
                    </div>

                </div>

            </main>
        </>
    )
}