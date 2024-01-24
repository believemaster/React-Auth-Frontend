import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarHeader from "./Components/NavbarHeader";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { useEffect, useState } from "react";
import axios from "axios";
import Forgot from "./Pages/Forgot";
import Reset from "./Pages/Reset";

function App() {
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("user");

        console.log(response);
        const user = response.data;
        setUser(user);
      } catch (e) {
        setUser(null);
      }
    })();
  }, [login]);
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <NavbarHeader user={user} setLogin={()=>setLogin(false)} />
          <Routes>
            <Route path="/" Component={() => <Home user={user} setLogin={()=>setLogin(true)}/>}></Route>
            <Route path="/login" Component={() => <Login setLogin={()=>setLogin(true)} />}></Route>
            <Route path="/register" Component={Register}></Route>
            <Route path="/forgot" Component={Forgot}></Route>
            <Route path="/reset/:token" Component={Reset}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
