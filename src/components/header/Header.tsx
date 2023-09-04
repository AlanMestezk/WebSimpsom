import {Link} from 'react-router-dom'
import style from './header.module.css'

export const Header = ()=>{
    return(
        <header className={style.header}>

            <h3 className={style.title}>
                <Link to='/'>WEB SIMPSON</Link>
            </h3>

            <div className={style.divButton}>
                <Link to='/about'>Sobre</Link>
                <Link to='/contact'>Contato</Link>
            </div>
            
        </header>
    )
}