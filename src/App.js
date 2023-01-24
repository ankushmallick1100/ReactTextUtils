//import About from "./About";
import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";

function App() {

  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'

    }
  }
  return (
    <>
      {/* <Navbar/> */}
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-4">
        <TextForm heading="Enter the text to analyze below" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
