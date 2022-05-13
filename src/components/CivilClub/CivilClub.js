import React from 'react';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Footers from './../Footers/Footers';

const CivilClub = () => {
    useEffect(() => {
        document.title = "Our Labs";
      }, []);
    return (

        <div>
            <Header />
            <h1>This Civil Club Page</h1>
            <Footers />
        </div>
    );
};

export default CivilClub;