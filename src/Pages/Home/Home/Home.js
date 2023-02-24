import React from 'react';
import ExperianceJobs from '../../../Componants/ExperianceJobs/ExperianceJobs';
import Faq from '../../../Componants/FAQ/Faq';
import Freshers from '../../../Componants/Freshers/Freshers';
import Hero from '../../../Componants/Hero/Hero';
import Reviews from '../../../Componants/Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Freshers />
            <ExperianceJobs />
            <Reviews/>
            <Faq/>
        </div>
    );
};

export default Home;