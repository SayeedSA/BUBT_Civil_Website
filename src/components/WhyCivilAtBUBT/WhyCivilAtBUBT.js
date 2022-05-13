import React from 'react';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


const WhyCivilAtBUBT = () => {
    useEffect(() => {
        document.title = "Why Civil At BUBT";
      }, []);
    return (
        <div>
            <Header />

            <h1>This is Why Civil At BUBT Page</h1>
            
            <Footer />
        </div>
    );
};

export default WhyCivilAtBUBT;