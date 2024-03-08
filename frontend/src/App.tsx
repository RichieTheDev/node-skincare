import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import BestSeller from "./component/BestSeller";
import About from "./component/About";
import Category from "./component/Category";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <BestSeller />
      <About />
      <Category />
      <Footer />
    </>
  );
};

export default App;
