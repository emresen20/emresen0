import logo from './logo.svg';
//import './App.css';
import logo1 from './images/Shen.png'
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Contact from './components/contac/Contact';
import Toggle from './components/toggle/Toggle';
import { useContext, useState } from 'react';
import { ThemeContext } from './context';
function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{backgroundColor:darkMode ? "#222" : "white", 
                color: darkMode && "white"}}>
      <Toggle/>
      <Intro/>
      <About/>
      <Contact/>
    </div>

  );
}

export default App;
