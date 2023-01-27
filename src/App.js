import About from "./component/About";
import React, { useState } from "react";
import Alert from "./component/Alert";
import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }
  setTimeout(() => {
    setAlert();
  }, 3000);

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey'
      showAlert("Dark mode has been enabled","success")
      // document.title = "Dark Mode Enabled"

      // setInterval(() => {
      //   document.title = "TextUtils is very amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils now"
      // }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
      // document.title = "Light Mode Enabled"
    }
  }
  return (
    <>
      {/* <Navbar/> */}
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      
      
      {/* /users      --> Component 1
          /users/home --> Component 2 */}
      <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-4">
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>}></Route>
            <Route exact path="/about" element={<About mode={mode}/>}></Route>
          </Routes>
      </div>
      </BrowserRouter>
        {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> */}
        {/* <About/> */}
      
    </>
  );
}

export default App;
