import React, { useEffect, useState } from "react";
import "./Reloj.css";
const Reloj = () => {
  const init = new Date();
  const [hours, sethours] = useState(init.getHours());
  const [minutes, setminutes] = useState(init.getMinutes());
  const [seconds, setseconds] = useState(init.getSeconds());

  const handleDate = () => {
    const date = new Date();
    setseconds(date.getSeconds());
    sethours(date.getHours());
    setminutes(date.getMinutes());
  };

  useEffect(() => {
    const setTimeOut = setInterval(() => {
      handleDate();
    }, 1000);

    return () => clearInterval(setTimeOut);
  }, []);

  return (
    <div className="clock">
      <div
        className="hand hour"
        data-hour-hand
        style={{ transform: `rotate(${hours * 30}deg)` }}
      ></div>
      <div
        className="hand minute"
        data-minute-hand
        style={{ transform: `rotate(${minutes * 6}deg)` }}
      ></div>
      <div
        className="hand second"
        data-second-hand
        style={{ transform: `rotate(${seconds * 6}deg)` }}
      ></div>
      <div className="number number1">1</div>
      <div className="number number2">2</div>
      <div className="number number3">3</div>
      <div className="number number4">4</div>
      <div className="number number5">5</div>
      <div className="number number6">6</div>
      <div className="number number7">7</div>
      <div className="number number8">8</div>
      <div className="number number9">9</div>
      <div className="number number10">10</div>
      <div className="number number11">11</div>
      <div className="number number12">12</div>
    </div>
  );
};

export default Reloj;
