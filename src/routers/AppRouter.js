import React from "react";
import "normalize.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import Blog from "../components/Blog";
import Post from "../components/Post";
import Home from "../components/Home";
import NuraNow from "../components/NuraNow";

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
