import React from 'react';
import Faq from '../../../Componants/FAQ/Faq';
import Hero from '../../../Componants/Hero/Hero';
import Reviews from '../../../Componants/Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Reviews/>
            <Faq/>
        </div>
    );
};

export default Home;