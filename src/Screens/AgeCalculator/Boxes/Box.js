import "./Box.css";

const Box = ({ value, title }) => {
  return (
    <div className="box-container">
      <div>{value}</div>
      <div>{title}</div>
    </div>
  );
};

export default Box;
