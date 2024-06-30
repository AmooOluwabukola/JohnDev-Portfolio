import React from "react";
import "../styles/Hero.css";
import logo from "../assets/image 1.svg";
import facebook from "../assets/Facebook.svg";
import IG from "../assets/ig.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className="container">
          <div className="d-lg-flex justify-content-between mb-5 ">
            <div className="d-flex justify-content-center mt-5 ">
              <a href="#" className="text-decoration-none">
              <img src={logo} alt=""  className="nav-logo  foot-brand"/>
               <span id="johnDev" className="  text-decoration-none navbar-brand text-dark foot-brand " >JohnDev,</span>
              </a>
              
            </div>
            <div className="d-flex d-none d-lg-block gap-4  mt-5">
              <a href="#" className="text-decoration-none text-dark me-3" >Home</a>
              <a href="#projects" className="text-decoration-none text-dark me-3">Portfolio</a>
              <a href="#about" className="text-decoration-none text-dark me-3">About me</a>
              <a href="#contact" className="text-decoration-none text-dark  me-3">Contact</a>
              <a href="#testimonial" className="text-decoration-none text-dark me-3">Testimonials</a>
              <a href="#projects" className="text-decoration-none text-dark me-3">Portfolio</a>
            </div>
            <div className="d-flex justify-content-center gap-4 mt-3 socials">
              <img src={facebook} alt=""  style={{width:"20px"}}  />
              <img src={IG} alt=""  style={{width:"20px"}}  />
              <img src={twitter} alt=""  style={{width:"20px"}} />
              <img src={linkedin} alt=""  style={{width:"20px"}}  />
            </div>
          </div>
          <hr className="opacity-50" />
          <div className="d-flex justify-content-between ">
            <p className="mt-5 policy-links">
            Built by Grace © {year}
            </p>
            <div className="d-flex gap-3 mb-5 align-items-center mt-5 policy-links mb-5">
            <a href="" className="text-decoration-none text-dark">Privacy Policy</a>
            <a href="" className="text-decoration-none text-dark">Terms of Service</a>
            <a href="" className="text-decoration-none text-dark">Cookies Settings</a>
            </div>
           
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
