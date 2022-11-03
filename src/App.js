import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import User from './components/pages/User';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';

function App() {

  return ( //className
    <Router>
      <div>
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/projects'>Projetos</Link>
          <Link to='/NewProject'>Novo Projeto</Link>
          <Link to='/user'>User</Link>
        </ul>
      </div>

      <Container customClass='min-height'>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/NewProject' element={<NewProject/>}/>
            <Route path='/user' element={<User/>} />
        </Routes>

      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
