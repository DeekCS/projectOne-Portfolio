import logo from './logo.svg';
import './App.css';
import './header.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import React, {Component} from "react";
import About from "./components/About/About";
function App() {
  return (
      <React.Fragment>
        <Header />
        <Banner />
          <About />
      </React.Fragment>
  );
}

export default App;
