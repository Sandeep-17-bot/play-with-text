import "./styles.css";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState("light");

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0c0124";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About Text"
          changeMode={changeMode}
          mode={mode}
        />
        <div className="container">
          <Switch>
            <Route path="/about">
              <About mode={mode} />
            </Route>
            <Route path="/">
              <Textarea heading="Enter Text Here" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
