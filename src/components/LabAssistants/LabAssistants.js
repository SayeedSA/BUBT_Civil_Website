import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./LabAssistants.css";

const LabAssistants = () => {
  useEffect(() => {
    document.title = "Lab Assistants | Civil - BUBT";
  }, []);
  return (
    <div>
      <Header />
      <h1>They are our Lab Assistants</h1>
      
      <Footer />
    </div>
  );
};

export default LabAssistants;
