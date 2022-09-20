// import profileImage from './img/testImg.png';
import Home from './routes/Home';
import Nav from './ui/Nav';
import Projects from './routes/Projects';
import About from './routes/About';
import Contact from './routes/Contact';
import Footer from './ui/Footer';

import './styles/global.scss';

function App() {
  return (
    <div className='App'>
      {/* <img src={profileImage} alt='profile' /> */}

      <Nav />

      <Home />
      <Projects />
      <About />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
