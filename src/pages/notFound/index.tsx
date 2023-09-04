import {Link} from 'react-router-dom'


export const NotFound = ()=>{


    return(
        <div>
            <h1>Error 404</h1>
            <strong>Página não encontrada</strong>
            <hr />
            <Link to='/'>Home</Link>
           
        </div>
    )
}