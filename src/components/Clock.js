import React, { Component } from "react";
import "./Clock.css";

class Clock extends Component {
  constructor() {
    super();
    this.setClock = this.setClock.bind(this);
    this.setRotation = this.setRotation.bind(this);
    this.secondRef = React.createRef();
    this.minuteRef = React.createRef();
    this.hourRef = React.createRef();
  }

  componentDidMount() {
    this.setClock();
    setInterval(this.setClock, 1000);
  }

  setClock() {
    const secondHand = this.secondRef.current;
    const minuteHand = this.minuteRef.current;
    const hourHand = this.hourRef.current;
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    this.setRotation(secondHand, secondsRatio);
    this.setRotation(minuteHand, minutesRatio);
    this.setRotation(hourHand, hoursRatio);
  }

  setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360);
  }

  render() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
      <div className="clock">
        <div className="face">
          <div className="hand second" ref={this.secondRef}></div>
          <div className="hand minute" ref={this.minuteRef}></div>
          <div className="hand hour" ref={this.hourRef}></div>
          <div className="dot"></div>
          {numbers.map((number) => {
            return (
              <div className={`number number${number}`}>
                <div className={`_${number}`}>{number}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Clock;
