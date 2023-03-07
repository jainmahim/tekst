import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const toggleStyle = () => {
    if (btnText === "Dark Mode") {
      setBtnText("Light Mode");
      setMode("light");
      document.title = "Tekst-Dark";
    }
    if (btnText === "Light Mode") {
      setBtnText("Dark Mode");
      setMode("dark");
      document.title = "Tekst-Light";
    }
  };

  const [btnText, setBtnText] = useState("Dark Mode");
  const [LDmode, setMode] = useState("light");
  return (
    <>
        <Router>
        <div className="container">
        <Routes>
        <Route path="/" element={<Navbar title="Tekst" mode={LDmode} toggleStyle={toggleStyle} />}></Route>
        </Routes>
        <TextForm heading="Enter your text below" />
        </div>
      </Router>   
        {/* <Alert alert="hello" type="success"/> */}  
     
    </>
  );
}

export default App;
