import "./App.css";

let name = "<b>Ankush</b>"
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1>Hello, {name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          provident! Magni quo assumenda eius minima vero, doloribus id nemo
          deleniti! Possimus rerum consectetur porro qui dicta, omnis eligendi a
          dolor?
        </p>
      </div>
    </>
  );
}

export default App;
