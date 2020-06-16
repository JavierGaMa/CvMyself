import React, { Component } from "react";
import Card from "../Utils/Card";
import '../../styles/Studies.css';
import study from'../../fixtures/studies.fixture';

class Studies extends Component<any,any> {
  
  constructor(props:any) {
    super(props);

    this.state = {
      studies: [...study],
    };

  }

  render() {
    return (
        <div className="project-list">
        <div className="project-wrapper">
        {this.state.studies.map((project:any, index:any) => {
            return <Card key={index} element={project} />;
          })}
        </div>
        </div>
    );
  }
}

export default Studies;
