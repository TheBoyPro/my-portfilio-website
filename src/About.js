import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpg";
function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                As a MEDICAL STUDENT with a passion for technology, I am on a
                mission to revolutionize healthcare through the power of web
                development. By combining my medical knowledge with my skills as
                a FULL-STACK DEVELOPER, I aim to create innovative digital
                solutions that improve patient care, enhance the efficiency of
                medical practices, and empower individuals to take control of
                their own health.
              </p>
              <p className="about__text p__color">
                My willingness to embrace different development jobs stems from
                a deep-rooted desire to constantly learn and adapt in an
                ever-evolving technological landscape. By taking on diverse
                projects, I not only expand my professional horizons but also
                gain valuable insights and perspectives from different
                industries. This broad experience allows me to bring a fresh and
                innovative approach to my work in healthcare, as I can draw upon
                the best practices and lessons learned from various domains.
              </p>
              <p className="about__text p__color">
                My commitment to growth in stages enables me to continually
                refine my abilities, collaborate with diverse teams, and adapt
                to new challenges, all of which are crucial for achieving my
                ultimate goal of making a lasting impact at the intersection of
                medicine and web development.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="/agbai-divine-resume.pdf" download="agbai-divine-resume.pdf" target="_blank">
                  <button  className="about btn pointer">Download CV</button>
                </a>
                <a href="https://wa.me/message/CRSNXZHP66CKK1" >
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
