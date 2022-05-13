import React from 'react';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Vision = () => {
    useEffect(() => {
        document.title = "Our Labs";
      }, []);
    return (
        <div>
            <Header />

            <h1>This is Vision Page</h1>

            <Footer />
        </div>
    );
};

export default Vision;