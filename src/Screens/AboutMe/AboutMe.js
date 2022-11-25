import "./AboutMe.css";
const AboutMe = () => {
  return (
    <div className="about-container">
      <img src={require("../../assets/me.jpg")} className="me" />
      <div>
        <div className="name">David Lozada Montero</div>
        <div className="description">
          Hello, my name is David Lozada and I am a web developer. I thoroughly
          enjoy creating new things and never shy away from a challenge. Seeing
          ideas and concepts come to life is one of my favorite parts of the
          development process. I look forward to continue growing and developing
          the skills I already have, as well as learning new ones!
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
