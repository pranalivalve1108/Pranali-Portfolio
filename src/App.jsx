import React from 'react';
import './App.css'
import { Route, Routes} from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Certifications from './Components/Certifications';
import Achievments from './Components/Achievments';
import GoHome from './Components/GoHome';

function App() {
  

  return (
  
    <div>

      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/certifications' element={<Certifications/>} />
        <Route path='/achievements' element={<Achievments/>} />
        <Route path='/contact' element={<Contact/>} />
        
      </Routes>
      <GoHome/>
    

      
      
    </div>
    
    
      
    
  )
}

export default App;
