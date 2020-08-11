import React from "react";
import "normalize.css";
import "./styles/styles.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Blog from "./pages/Blog/Blog";
import Post from "./components/Post/Post";
import Home from "./pages/Home/Home";
import NuraNow from "./pages/NuraNow/NuraNow";
import Nuraphone from "./pages/Nuraphone/Nuraphone";
import Nuraloop from "./pages/Nuraloop/Nuraloop";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Accessories from "./pages/Accessories/Accessories";

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
            <Route path="/nuraphone" component={Nuraphone} />
            <Route path="/nuraloop" component={Nuraloop} />
            <Route path="/how-it-works" component={HowItWorks} />
            <Route path="/accessories" component={Accessories} />
          </div>
        </Switch>
      </Layout>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
