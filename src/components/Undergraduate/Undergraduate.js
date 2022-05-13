import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useEffect } from 'react';

const Undergraduate = () => {
    useEffect(() => {
        document.title = "Undergraduate";
      }, []);
    return (
        <div>
            <Header />
        `      <h1>Undergraduate Course Details</h1>`
            <Footer />
        </div>
    );
};

export default Undergraduate;