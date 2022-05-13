import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useEffect } from 'react';

const Mission = () => {
    useEffect(() => {
        document.title = "Our Labs";
      }, []);
    return (
        <div>
            <Header />

            <h1>This Mission Page</h1>

            <Footer />
        </div>
    );
};

export default Mission;