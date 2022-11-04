import { Link } from "react-router-dom"
import Container from './Container'
import styles from './Navbar.module.css'
//Importar LOGO

function Navbar(){
    return(
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/projects'>Projetos</Link></li>
                <li><Link to='/user'>User</Link></li>
            </ul>
      </nav>
    )
}

export default Navbar