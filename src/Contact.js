import React from "react";
import "./Contact.css";
import contactImg from "./img/about-9.jpg";
function Contact() {
  return (
    <div style={{paddingInline:30}} className="contact component__space" id="Contact">
      <form
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Hire Me.</h1>
              <p className="hire__text white">
                I am available for freelance work. Connect with me via phone:
              </p>

              <p className="hire__text white">
                <strong>
                  <a style={{ color: "#F9004D" }} href="tel:+2348145483148">
                    +234 8145483148
                  </a>
                </strong>{" "}
                or email{" "}
                <strong>
                  {" "}
                  <a
                    style={{ color: "#F9004D" }}
                    target="_blank"
                    href="mailto:agbaidivine2022@gmail.com"
                  >
                    agbaidivine2022@gmail.com
                  </a>
                  <a href="email"></a>
                </strong>
              </p>
            </div>
            <div className="input__box">
              <input
                type="text"
                className="contact name"
                placeholder="Your name *"
                required
              />
              <input
                required
                type="text"
                className="contact email"
                placeholder="Your Email *"
              />
              <input
                required
                type="text"
                className="contact subject"
                placeholder="Write a Subject"
              />
              <textarea
                name="message"
                id="message"
                placeholder="Write Your message"
              ></textarea>
              <a href="https://wa.me/message/CRSNXZHP66CKK1">
                <button className="btn contact pointer">Submit</button>
              </a>
            </div>
          </div>
        </div>
        <div className="col__2">
          <img src={contactImg} alt="" className="contact__img" />
        </div>
      </form>
    </div>
  );
}

export default Contact;
