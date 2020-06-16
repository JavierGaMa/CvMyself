import React, { Component } from "react";
import "../../styles/Footer.css";

class Footer extends Component {
  render() {
    return (
      <>
        <footer className="navbar footer">
          <div className="container d-flex">
            <div className="social-media d-flex">
              <a href="https://github.com/JavierNoriumX" target="_blank">
                <img
                  alt=""
                  src="https://github.githubassets.com/favicon.ico"
                  className="icon-footer"
                ></img>
              </a>
              <a
                href="https://www.linkedin.com/in/francisco-javier-garcia-marquez-04a873161"
                target="_blank"
              >
                <img
                  alt=""
                  src="https://yt3.ggpht.com/-CepHHHB3l1Y/AAAAAAAAAAI/AAAAAAAAAAA/Z8MftqWbEqA/s68-c-k-no-mo-rj-c0xffffff/photo.jpg"
                  className="icon-footer"
                />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=527711902763&text=Usted%20esta%20tratando%20de%20contactar%20a%20Francisco%20García"
                target="_new"
              >
                {" "}
                <img
                  alt=""
                  src="https://static.whatsapp.net/rsrc.php/yv/r/-r3j-x8ZnM7.svg"
                  height="40px"
                ></img>
              </a>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
