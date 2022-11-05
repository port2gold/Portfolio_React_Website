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
            semper feugiat nibh sed pulvinar proin gravida. Nisl tincidunt eget
            nullam non nisi est sit. Sollicitudin tempor id eu nisl nunc mi
            ipsum faucibus. Etiam dignissim diam quis enim lobortis scelerisque.
            Integer malesuada nunc vel risus commodo. Et odio pellentesque diam
            volutpat commodo sed egestas egestas. Praesent elementum facilisis
            leo vel fringilla est ullamcorper eget. Nulla pellentesque dignissim
            enim sit amet. Ac ut consequat semper viverra nam. Vel pharetra vel
            turpis nunc eget lorem dolor sed. Tempor orci dapibus ultrices in
            iaculis nunc sed augue. Duis tristique sollicitudin nibh sit. Id
            aliquet lectus proin nibh nisl. Convallis tellus id interdum velit
            laoreet id donec. A erat nam at lectus urna. Viverra nibh cras
            pulvinar mattis nunc sed blandit libero. Amet porttitor eget dolor
            morbi. Nunc pulvinar sapien et ligula ullamcorper malesuada proin.
            Id semper risus in hendrerit. Ut diam quam nulla porttitor massa id.
            Tempor orci eu lobortis elementum nibh tellus molestie. Ultricies
            integer quis auctor elit. Maecenas volutpat blandit aliquam etiam
            erat velit scelerisque in dictum. Sit amet luctus venenatis lectus
            magna fringilla urna porttitor. Vulputate odio ut enim blandit.
            Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Integer
            enim neque volutpat ac. Pellentesque id nibh tortor id. Aliquam
            eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis.
            Eu consequat ac felis donec. Diam maecenas ultricies mi eget mauris
            pharetra et. A iaculis at erat pellentesque. Interdum velit euismod
            in pellentesque. Leo a diam sollicitudin tempor id eu nisl. Justo
            laoreet sit amet cursus sit. A diam maecenas sed enim ut sem viverra
            aliquet. Fames ac turpis egestas sed tempus urna et. Tellus molestie
            nunc non blandit massa. Pellentesque nec nam aliquam sem. Fames ac
            turpis egestas maecenas pharetra. Id donec ultrices tincidunt arcu
            non sodales neque. Metus vulputate eu scelerisque felis imperdiet.
            Urna porttitor rhoncus dolor purus non. Id eu nisl nunc mi ipsum
            faucibus vitae aliquet nec. Sed euismod nisi porta lorem mollis
            aliquam ut porttitor leo. Amet purus gravida quis blandit. Sit amet
            consectetur adipiscing elit. Amet risus nullam eget felis eget nunc.
            Euismod in pellentesque massa placerat duis. Suspendisse potenti
            nullam ac tortor vitae purus faucibus ornare. Hac habitasse platea
            dictumst quisque. Ante in nibh mauris cursus mattis. Orci nulla
            pellentesque dignissim enim. Luctus accumsan tortor posuere ac ut
            consequat semper viverra nam. Nec tincidunt praesent semper feugiat
            nibh. Nisl nunc mi ipsum faucibus vitae. Nunc scelerisque viverra
            mauris in aliquam.
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
