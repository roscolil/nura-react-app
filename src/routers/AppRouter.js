import React from "react";
import "normalize.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Blog from "../components/Blog";
import Post from "../components/Post";
import NuraNow from "../components/NuraNow";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <div className="">
            <Route path="/" component={Blog} exact={true} />
            <Route path="/post" component={Post} />
            <Route path="/nuranow" component={NuraNow} />
          </div>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
// TODO Add NavLink react-router-dom
