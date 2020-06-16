import React, { Component } from 'react';
import '../../styles/SideBar.css';

class SideBar extends Component {
    render() {
        return (
            <div className="hero">

            <div className="content">
                <div className="profile-picture"></div>
                <div className="hero-title">
                    <span>Francisco Javier García Márquez</span>
                </div>
                <div className="hero-title-sub">
                    <span>Desarrollador Front-End</span>
                </div>
            </div>
        </div>

        );
    }
}

export default SideBar;