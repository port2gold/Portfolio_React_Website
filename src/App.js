import React from "react";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SecondHeader from "./components/secondHeader/SecondHeader";

const App = () => {
  return (
    <>
      <Header />
      <SecondHeader />
      <Nav />
      <About />
      <Experience />
      {/* <Contact />
      <Footer /> */}
    </>
  );
};

export default App;
