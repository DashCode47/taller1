import "bootstrap/dist/css/bootstrap.min.css";
import Navigator from "./Components/NavBar/NavBar";
import AboutMe from "./Screens/AboutMe/AboutMe";
import Home from "./Screens/Home/Home";
import Imc from "./Screens/IMCCalculator/Imc";
import AgeCalculator from "./Screens/AgeCalculator/AgeCalculator";
import Clock from "./Screens/Clock/Clock";
import Contact from "./Screens/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Card from "react-bootstrap/Card";

const App = () => {
  return (
    <>
      <Navigator />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/imc" element={<Imc />} />
        <Route path="/age" element={<AgeCalculator />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
