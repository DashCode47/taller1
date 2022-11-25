import Reloj from "./reloj/Reloj";
import "./Clock.css";
const Clock = () => {
  return (
    <div className="clock-container">
      <div>
        <Reloj />
      </div>
    </div>
  );
};

export default Clock;
