import React from 'react';
import { useEffect } from 'react';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';

const OurLabs = () => {
    useEffect(() => {
        document.title = "Our Labs";
      }, []);

    return (
        <div>
            <Header />
            
            <h1>Civil Labs Page</h1>

            <Footer />
        </div>
    );
};

export default OurLabs;