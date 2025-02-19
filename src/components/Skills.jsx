import React from "react";
import "../styles/Hero.css";
import tag from "../assets/tag 1.svg";
import mobile from "../assets/icomoon-free_mobile.svg";
import testing from "../assets/carbon_ibm-engineering-test-mgmt.svg";
import cloud from "../assets/feather-pen 1.svg";
const Skills = () => {
  return (
    <>
    <main id="skills" className="p-4">
    <section className="skills">
        <div className="container mt-5 mb-5">
          <p id="myskills">My Skills</p>
          <p id="myexpertise">My Expertise</p>
          <div className="d-lg-flex justify-content-between align-items-center w-100 gap-3 mt-2 cards-div">
            <div className="  rounded mt-3 cards ">
              <img src={mobile} alt="" className="m-3" />
              <h1 className="title m-3">Responsive Design</h1>
              <p className="m-3 text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
            <div className=" rounded mt-3 cards">
              <img src={tag} alt="" className="m-3" />
              <h1 className="title m-3">Front-End Frameworks</h1>
              <p className="m-3 text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
            <div className="  rounded mt-3 cards">
              <img src={testing} alt="" className="m-3" />
              <h1 className="title m-3">Testing and Debugging</h1>
              <p className="m-3 text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
            <div className="  rounded mt-3 cards ">
              <img src={cloud} alt="" className="m-3" />
              <h1 className="title m-3">Cloud Services</h1>
              <p className="m-3 text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
      
    </>
  );
};

export default Skills;
