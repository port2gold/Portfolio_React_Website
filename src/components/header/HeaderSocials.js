import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/abdulkabir-omotoso/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/port2gold" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://x.com/Kaybeesure" target="_blank" rel="noreferrer">
        <AiOutlineTwitter />
      </a>
    </div>
  );
};
export default HeaderSocials;
