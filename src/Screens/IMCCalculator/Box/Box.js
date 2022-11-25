import React, { useEffect, useState } from "react";
import "./Box.css";

const Box = () => {
  const [peso, setpeso] = useState(0);
  const [statura, setstatura] = useState(0);
  const [val, setval] = useState(0);
  const [diagnostico, setdiagnostico] = useState("Normal");
  const [final, setfinal] = useState();
  const [color, setcolor] = useState();

  /*   useEffect(() => {
    setval(statura / 100);
    setdiagnostico(peso / (val * val));
    if (diagnostico < 24.9) setfinal("Normal");
    if (diagnostico > 24.9 && diagnostico < 29.9) setfinal("Sobrepeso");
    if (diagnostico > 29.9 && diagnostico < 34.9) setfinal("Obesidad grado 1");
    if (diagnostico > 34.9 && diagnostico < 39.9) setfinal("Obesidad grado 2");
    if (diagnostico > 40) setfinal("Obesidad gado 3");
  }, [peso, statura]); */
  const calcular = () => {
    const valor = statura / 100;
    const peso2 = peso;
    const total = peso / (valor * valor);
    /* setval(statura / 100); */
    setdiagnostico(total);
  };

  const submit = () => {
    calcular();
    if (diagnostico < 24.9) {
      setfinal("Peso Normal");
      setcolor("green");
    }
    if (diagnostico >= 24.9 && diagnostico < 29.9) {
      setfinal("Sobrepeso");
      setcolor("yellow");
    }
    if (diagnostico >= 29.9 && diagnostico < 34.9) {
      setfinal("Obesidad grado 1");
      setcolor("red");
    }
    if (diagnostico >= 34.9 && diagnostico < 39.9) {
      setfinal("Obesidad grado 2");
      setcolor("red");
    }
    if (diagnostico > 40) {
      setfinal("Obesidad gado 3");
      setcolor("red");
    }
  };
  return (

    <div className="box">

      <input
        type={"range"}
        max={100}
        value={peso}
        onChange={(e) => setpeso(e.target.valueAsNumber)}
        className={"inputs"}
      />

      <input
        type={"range"}
        max={200}
        value={statura}
        onChange={(e) => setstatura(e.target.valueAsNumber)}
        className={"inputs"}
      />

      <div>
        <p>
          Peso:
          <span>{peso}</span>
        </p>
        <p>
          Estatura:
          <span>{statura}</span>
        </p>
      </div>
      <div style={{ color, fontSize: "20px", fontWeight: "bold" }}>{final}</div>
      <button onClick={submit} className="btn-calcular">
        Calcular
      </button>
    </div>
  );
};

export default Box;
