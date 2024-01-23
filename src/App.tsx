import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarHeader from "./Components/NavbarHeader";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    (
      async () => {
        try {
          const response = await axios.get('user')

          console.log(response);
          const user = response.data
          setUser(user);
        } catch (e) {
          setUser(null)
        }
      }
    )();
  }, []);
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <NavbarHeader user={user} />
          <Routes>
            <Route path="/" Component={() => <Home user={user} />}></Route>
            <Route path="/login" Component={Login}></Route>
            <Route path="/register" Component={Register}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
