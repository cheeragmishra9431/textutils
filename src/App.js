import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {
  const [alert, setalert] = useState(null)
  const [mode, setmode] = useState('light')
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='grey'
      showAlert("dark mode has been enabled", "success")
      // really cool idea for advertisments using set intervals and causing flashes
      setInterval(() => {
        
        document.title="Textutils-Dark Mode"
      }, 2000);
      setInterval(() => {
        document.title="Install Textutils now"
      }, 1500);
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showAlert("light mode has been enabled", "success")
      
        
        document.title="Textutils-Light Mode"
      
    }
  }
  const showAlert=(message,type1)=>{
    setalert({
      msg: message,
      type: type1
    })
    setTimeout(()=>{
      setalert(null); 
    },3000)
  }
  return (
    <>
      <Router>
      <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      {/* <Alert alert={alert}/> */}
      <div className='container my-3' >
      <Routes>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/">
          <TextForm heading =" Enter the text to analyse below" mode={mode}/>
     
          </Route>
        </Routes>
      

      </div>
      </Router>
  </>
  );
}

export default App;
