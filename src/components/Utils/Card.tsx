import React, { Component } from 'react';
import '../../styles/Card.css'

class Card extends Component<any> {
    render() {

        const { image, name, description, date} = this.props.element;

        return (
            <div className="card">
            <img src={image} alt=""></img>
            <div className="container">
              <h3>{name}</h3>
                <p>{description}</p>
            <h4>{date}</h4>
            </div>
          </div> 
        );
    }
}

export default Card;