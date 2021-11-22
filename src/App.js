import logo from './logo.svg';
import './App.css';
import './header.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import React, {Component} from "react";

import Works from "./components/Works/Works";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (

      <Router>
      <React.Fragment>
        <Header />
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/works' element={<Works />} />
          </Routes>
      </React.Fragment>
      </Router>
  );
}

export default App;
