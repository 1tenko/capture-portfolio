import React from "react";
// Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
// Styles
import {
  About,
  Description,
  Image,
  Cards,
  Card,
} from "./styles/ServicesSection.styled";

const ServicesSection = () => {
  return (
    <About>
      <Description>
        <div className="description">
          <h2>
            High <span>quality</span> service.
          </h2>
          <Cards>
            <Card>
              <div className="icon">
                <img src={clock} alt="clock" />
                <h3>Efficient</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>

            <Card>
              <div className="icon">
                <img src={teamwork} alt="teamwork" />
                <h3>Teamwork</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>

            <Card>
              <div className="icon">
                <img src={diaphragm} alt="diaphragm" />
                <h3>Diaphragm</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>

            <Card>
              <div className="icon">
                <img src={money} alt="money" />
                <h3>Money</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
          </Cards>
        </div>
      </Description>
      <Image>
        <img src={home2} alt="home2" />
      </Image>
    </About>
  );
};

export default ServicesSection;
