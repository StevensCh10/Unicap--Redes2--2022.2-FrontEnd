import styles from './Home.module.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Projects from './Projects';
import User from './User';
import NewProject from './NewProject';
import Container from '../layout/Container';
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

function Home(){
    return(
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