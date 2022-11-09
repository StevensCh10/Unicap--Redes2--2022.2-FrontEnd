import { Link } from "react-router-dom"
import Container from './Container'
import styles from './Navbar.module.css'
//Importar LOGO

function Navbar(){
    return(
        <Container>
            <nav className={styles.navbar}>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to='/'>Home</Link></li>
                    <li className={styles.item}><Link to='/projects'>Projects</Link></li>
                    <li className={styles.item}><Link to='/user'>User</Link></li>
                </ul>
            </nav>
        </Container>
    )
}

export default Navbar