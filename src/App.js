import React from "react";
import "normalize.css";
import "./styles/styles.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogList from "./components/BlogList";
import Post from "./components/Post";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-wrapper">
        <div className="">
          <BlogList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

// TODO Add NavLink react-router-dom
