import styles from './styles.css'
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom'
import Projects from '../Projects';
import User from '../User';
import NewProject from '../NewProject';
import Container from '../../components/layout/Container';
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import useAuth from '../../hooks/useAuth';

function Home(){

  const {signout} = useAuth()
  const navigate = useNavigate()

    return( //CRIAR LINK PARAR PODER SAIR --onClick={() => [signout(), navigate("/")]}
    <Router>
      <Navbar/>

        <Container customClass='min-height'>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='/NewProject' element={<NewProject/>}/>
              <Route path='/user' element={<User/>} />
          </Routes>
        </Container>

      <Footer/>
    </Router>
    )
}

export default Home