import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarHeader from "./Components/NavbarHeader";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <NavbarHeader />
          <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/login" Component={Login}></Route>
            <Route path="/register" Component={Register}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
