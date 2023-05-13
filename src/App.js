import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import Resume from './pages/Resume';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>    
  );
}

export default App;
