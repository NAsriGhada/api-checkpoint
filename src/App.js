import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import Profile from "./Components/Profile";
import { Route, Routes } from "react-router-dom";
import UsersList from "./Components/UserList";

function App() {
  const [login, setLogin] = useState(false);

  const toggle = () => {
    setLogin(!login);
  };

  return (
    <div className="App">
      <Navbar toggle={toggle} login={login} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/UsersList" element={<UsersList login={login} />} />
        <Route path="/Profile/:userId" element={<Profile login={login} />} />
      </Routes>
    </div>
  );
}

export default App;
