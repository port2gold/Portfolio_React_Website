import React from "react";
import "./about.css";
import Me from "../../assets/ABDULKARIM (2).jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Clients worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>Over 1000 Projects completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam
            vestibulum morbi blandit cursus. Quam pellentesque nec nam aliquam
            sem. Massa enim nec dui nunc mattis enim ut. At erat pellentesque
            adipiscing commodo elit at imperdiet dui accumsan. Diam sit amet
            nisl suscipit adipiscing bibendum. Lorem ipsum dolor sit amet
            consectetur adipiscing elit ut. Nec ultrices dui sapien eget mi
            proin sed. Pellentesque nec nam aliquam sem et tortor. Viverra
            tellus in hac habitasse platea dictumst vestibulum rhoncus. Accumsan
            in nisl nisi scelerisque. Ridiculus mus mauris vitae ultricies leo
            integer malesuada. Pellentesque habitant morbi tristique senectus et
            netus. Volutpat est velit egestas dui id ornare arcu odio. Sit amet
            tellus cras adipiscing enim eu turpis egestas pretium. Semper eget
            duis at tellus at urna condimentum mattis. Nec tincidunt praesent
           
            faucibus vitae aliquet nec. Sed euismod nisi porta lorem mollis
            aliquam ut porttitor leo. Amet purus gravida quis blandit. Sit amet
            consectetur adipiscing elit. Amet risus nullam eget felis eget nunc.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
