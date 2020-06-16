import React, { Component } from "react";
import Item from "../Utils/Item";
import ProjectsMade from "../../fixtures/projects.fixture";
import "../../styles/Projects.css";


interface ProjectState {
  projects: any
}
class Projects extends Component<any,any> {

  constructor(props:any) {
    super(props);

    this.state = {
      projects: [...ProjectsMade],
    };

  }
  componentDidMount(){
    if (this.props.show) {

      const showMaxim = this.state.projects.slice(0,this.props.show);
      this.setState({
            projects: showMaxim
      });
  
      }
  }

  render() {
    return (
      <div className="project-list">
        <div className="project-wrapper">
          {this.state.projects.map((project:any, index:any) => {
            return <Item key={index} element={project} />;
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
