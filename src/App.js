import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';



function App() {
  const [alert, setalert] = useState(null)
  const [mode, setmode] = useState('light')
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='grey'
      showAlert("dark mode has been enabled", "success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showAlert("light mode has been enabled", "success")
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
    
      <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3' >
      <TextForm heading =" Enter the text to analyse below" mode={mode}/>
      {/* <About/> */}

      </div>
  </>
  );
}

export default App;
