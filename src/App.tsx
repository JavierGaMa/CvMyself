import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import { Layout } from "antd";

// import components
import Home from "./components/Home";
import View from "./components/ViewProjects/View";
import Footer from "./components/Footer/Footer";
import Studies from './components/Studies/Studies';

function App() {
  return (
    <Router>
      <Layout className="layout">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={View} />
          <Route exact path="/studies" component={Studies}/>
        </Switch>
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;
