import React, { Component } from "react";
import Projects from "../projects/Projects";
import '../../styles/View.css'
class View extends Component {
  render() {
    return (
      <div className="view">
        <h1 className="title">
          <strong> Projects and developments </strong>
        </h1>
        <Projects />
      </div>
    );
  }
}

export default View;
