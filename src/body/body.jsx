import React from "react";
import "./body.css";
import whatsapp from "../assets/whatsapp.png";
import telegram from "../assets/telegram.png";
import viber from "../assets/viber.png";

class Body extends React.Component {
  render() {
    return (
      <div className="buy-body">
        <div className="bg-image-container">
          <div className="bg-image" />
        </div>
        <div className="bg-text">
          <div className="bg-text-container">
            <div className="description">
              Продажа куриц с доставкой по Перми и Пермскому краю <br />{" "}
              Работаем на заказ
            </div>
            <div className="button-container">
              <a href="tel:79024785293" className="phone-number-button">
                Позвонить на +7 902 478 52 93
              </a>
            </div>
            <div className="social-container">
              <a href="tel:79024785293" className="social">
                <img src={whatsapp} alt="" className="social-img" />
              </a>
              <a href="tel:79024785293" className="social">
                <img src={telegram} alt="" className="social-img" />
              </a>
              <a href="tel:79024785293" className="social">
                <img src={viber} alt="" className="social-img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
