import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Detail from "./components/Detail";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
