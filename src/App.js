import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import User from './components/pages/User';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {

  return ( //className
    <Router>
      <Navbar/>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/NewProject' element={<NewProject/>}/>
            <Route path='/user' element={<User/>} />
        </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
