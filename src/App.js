import About from "./About";
import "./App.css";
import Navbar from "./Navbar";
//import TextForm from "./TextForm";

function App() {
  return (
    <>
      {/* <Navbar/> */}
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      <Navbar title="TextUtils" />
      <div className="container my-4">
        {/* <TextForm heading="Enter the text to analyze below"/> */}
        <About/>
      </div>
    </>
  );
}

export default App;
