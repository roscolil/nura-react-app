import React from "react";
import "normalize.css";
import "./styles/styles.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-wrapper">
        <div className=""></div>
        main body content
      </div>
      <Footer />
    </div>
  );
}
