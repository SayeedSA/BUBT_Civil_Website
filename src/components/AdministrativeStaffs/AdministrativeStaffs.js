import React, { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const AdministrativeStaffs = () => {
    useEffect(() => {
      document.title = "Administrative Staffs | Civil - BUBT";
    }, []);
  return (
    <div>
      <Header />
      <h1>They are our Administrative Staffs</h1>
      <Footer />
    </div>
  );
};

export default AdministrativeStaffs;
