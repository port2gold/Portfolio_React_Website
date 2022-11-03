import react from "react";
import Me from "../../assets/ABDULKARIM (2).jpg";
import HeaderSocials from "../header/HeaderSocials";
import "./SecondHeader.css";

const SecondHeader = () => {
  return (
    <div className=" container secondHeaderContainer">
      <HeaderSocials />
      <div className="me">
        <img src={Me} alt="my me me" />
      </div>
      <div className="scroll__down">
        <a href="#contact">Scroll Down</a>
      </div>
    </div>
  );
};
export default SecondHeader;
