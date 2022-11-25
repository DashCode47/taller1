import "./Contact.css";
function Contact() {
  return (
    <div className="contact-container">
      <div className="form">
        <div className="title">Let's Connect</div>
        <div className="upinput">
          <input
            type={"text"}
            placeholder="first name"
            className="input firstname"
          />
          <input type={"text"} placeholder="Last Name" className="input last" />
        </div>

        <input
          type={"text"}
          placeholder="Email Adress"
          className="input email"
        />
        <input
          type={"text"}
          placeholder="Enter text here"
          className="input message"
        />
        <button className="btn-form">Get in Touch</button>
      </div>
    </div>
  );
}

export default Contact;
