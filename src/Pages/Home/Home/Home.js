import React from 'react';
import ExperianceJobs from '../../../Componants/ExperianceJobs/ExperianceJobs';
import Faq from '../../../Componants/FAQ/Faq';
import Freshers from '../../../Componants/Freshers/Freshers';
import Hero from '../../../Componants/Hero/Hero';
import Reviews from '../../../Componants/Reviews/Reviews';
import TopCompanies from '../../../Componants/TopCompanies/TopCompanies';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Freshers />
            <ExperianceJobs />
            <TopCompanies />
            <Reviews/>
            <Faq/>
        </div>
    );
};

export default Home;