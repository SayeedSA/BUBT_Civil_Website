import React from 'react';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Achievements = () => {
    useEffect(() => {
        document.title = "Achievements";
      }, []);
    return (
        <div>
            <Header />

            <h1>This is Achievements Page</h1>

            <Footer />
        </div>
    );
};

export default Achievements;