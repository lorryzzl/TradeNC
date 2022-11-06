import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";


import logo from './tradeNC.jpeg';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (

    <Router>
      <nav>
      <div>
        <img className = "tradeNCLogo" src={logo} alt="nc"/>
      </div>
        <Link className="wlogin" to="/"> Home </Link>

        {!isAuth ? (
          <Link className="wlogin" to="/login"> Login </Link>
        ) : (
          <>
            <Link className="wlogin" to="/createpost"> Sell My Item </Link>
            <button className="logout" onClick={signUserOut}> Log Out</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;