import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/pages/Home"
import Header from "./components/Header"
 import Saved from "./components/pages/Saved"
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { url } from "inspector";

class App extends Component {
  render() {
    
    return (
    
    <Router>
      <div className="container-fluid " >
        <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/saved" component={Saved}/>
      </div>
    </Router>
    );
  }
}

export default App;
