import React from "react";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <a href="/" className="header-text main">
            Продам
          </a>
          <a href="/" className="header-text sub">
            Куру
          </a>
          <div className="header-description">
            <div class="header-description-text">
              Продажа куриц по Перми и Пермскому краю
            </div>
          </div>
        </div>
        <div className="phone">
          <a href="tel:79024785293" className="phone-number">
            🕻 +7 902 478 52 93
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
