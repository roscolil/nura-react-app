import React from "react";
import "normalize.css";
import "../styles/styles.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Blog from "../pages/Blog/Blog";
import Post from "../components/Post/Post";
import Home from "../pages/Home/Home";
import NuraNow from "../pages/NuraNow/NuraNow";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Layout>
        <Switch>
          <div className="">
            <Route path="/" component={Home} exact={true} />
            <Route path="/blog" component={Blog} />
            <Route path="/post/" component={Post} />
            <Route path="/nuranow" component={NuraNow} />
          </div>
        </Switch>
      </Layout>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
