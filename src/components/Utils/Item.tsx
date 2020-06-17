import React, {Component} from 'react';
import '../../styles/Item.css'

class Item extends Component<any> {
    render () {
        const { image, name, descrption, plattform} = this.props.element;
        
         
        return (
            <div className="project">
            <div className="project-image">
            <img alt='' key={this.props.key} src={require(`../../assets/${image}.png`)}  />;
            </div>
    
            <div className="project-kind web">{plattform}</div>
    
            <div className="project-text">
                <h3>{name}</h3>
                <h4>{descrption}</h4>
            </div>
    
        </div>
        );
    }
};

export default Item;