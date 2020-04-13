import React from "react";
import "./icons.css";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";

class Icons extends React.Component {
  render() {
    return (
      <div className="icons-container">
        <div className="icon-container">
          <img className="icon-img" src={icon1} alt="" />
          <div className="icon-description">Крупный и мелкий опт</div>
        </div>
        <div className="icon-container">
          <img className="icon-img" src={icon2} alt="" />
          <div className="icon-description">Курицы самых разных пород</div>
        </div>
        <div className="icon-container">
          <img className="icon-img" src={icon3} alt="" />
          <div className="icon-description">Поможем в доставке</div>
        </div>
        <div className="icon-container">
          <img className="icon-img" src={icon4} alt="" />
          <div className="icon-description">
            Особые условия для крупного опта
          </div>
        </div>
      </div>
    );
  }
}

export default Icons;
