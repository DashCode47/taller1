import Header from "./Header/Header";
import Boxes from "./Boxes/Box";
import AgePicker from "./AgePicker/AgePicker";
import "./AgeCalculator.css";
const AgeCalculator = () => {
  return (
    <div className="age-container">
      <AgePicker />
    </div>
  );
};

export default AgeCalculator;
