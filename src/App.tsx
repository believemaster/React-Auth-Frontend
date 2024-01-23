import "./App.css";
import NavbarHeader from "./Components/NavbarHeader";
import Register from "./Pages/Register";

function App() {
  return (
    <div className="App">
      <div className="container">
        <NavbarHeader />
        <Register />
      </div>
    </div>
  );
}

export default App;
