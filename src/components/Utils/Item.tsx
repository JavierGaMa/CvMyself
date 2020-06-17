import React, { Component } from "react";
import "../../styles/Item.css";
import constant from '../../constant/constant';
class Item extends Component<any> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  getPlattform (plat:any)  {
    switch (plat) {
      case 0:
        return constant.typeProject.web
      case 1:
        return constant.typeProject.flutter
      default:
        return constant.typeProject.otro
    }
  };

  render() {
    const { image, name, descrption, plattform } = this.props.element;

    return (
      <div className="project">
        <div className="project-image">
          <img
            alt=""
            src={require(`../../assets/${image}.png`)}
          />
        </div>

        <div className="project-kind web">{this.getPlattform(plattform)}</div>

        <div className="project-text">
          <h3>{name}</h3>
          <h4>{descrption}</h4>
        </div>
      </div>
    );
  }
}

export default Item;
