import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import BubtHeader from "../BubtHeader/BubtHeader";

const Home = () => {
  useEffect(() => {
    document.title = "Department of Civil Engineering - BUBT";
  }, []);

  return (
    <div>
      {/* <BubtHeader /> */}
      {/* <Navbar /> */}
      <Header />
      <Banner />
      <Footer />
      
    </div>
  );
};

export default Home;
