import React from "react";
import Bukola from "../assets/2.png";
import "../styles/Hero.css";
import John2 from "../assets/About Me.svg"
const About = () => {
  return (
    <>
      <main id="about" className="p-4">
        <section className="container">
          <div className="row mt-5 mb-5">
            <div className="col-lg-6">
              <img src={John2} className="w-75" alt="" />
            </div>
            <div className="col-lg-6 py-5 mt-4">
              <p className="about">About</p>
              <h2 className="aboutMe">About Me</h2>
              <p className="aboutText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                varius faucibus massa sollicitudin amet augue. Nibh metus a
                semper purus mauris duis. Lorem eu neque, tristique quis duis.
                Nibh scelerisque ac adipiscing velit non nulla in amet
                pellentesque.
              </p>
              <p className="aboutText">
                Sit turpis pretium eget maecenas. Vestibulum dolor mattis
                consectetur eget commodo vitae. Amet pellentesque sit pulvinar
                lorem mi a, euismod risus r..
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
