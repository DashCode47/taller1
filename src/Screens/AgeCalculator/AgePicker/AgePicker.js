import { useState } from "react";
import "./AgePicker.css";
import Box from "../Boxes/Box";

const AgePicker = () => {
  const time = new Date();
  const [date, setdate] = useState();
  const [years, setyears] = useState(0);
  const [month, setmonth] = useState(0);
  const [days, setdays] = useState(0);
  const [counter, setcounter] = useState(0);

  const dateconverter = () => {
    setcounter(counter + 1);
    const presente = time.getTime();
    const pasado = date.getTime();
    const eq = (presente - pasado) / (1000 * 3600 * 24);
    let TotalDays = Math.ceil(eq) / 365;
    setyears(Math.floor(TotalDays));
    const remain = TotalDays % 1;
    setmonth((remain * 365) / 30);
    let remainofMonth = ((remain * 365) / 30) % 1;
    setdays(Math.floor(remainofMonth * 30));
  };

  return (
    <div className="picker-container">
      <input
        type={"date"}
        onChange={(e) => setdate(e.target.valueAsDate)}
        className="input"
      />
      <button onClickCapture={dateconverter} className="btn">
        Calcular
      </button>
      <div className="boxes">
        <Box value={years} title="years" />
        <Box value={Math.floor(month)} title="months" />
        <Box value={days} title="days" />
      </div>
    </div>
  );
};

export default AgePicker;
