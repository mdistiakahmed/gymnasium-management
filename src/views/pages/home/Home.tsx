import React from 'react';
import Header2 from '../../common-components/header/Header2';
import Footer from '../footer/Footer';
import Join from '../join/Join';
import Plans from '../plans/Plans';
import Programs from '../programs/Programs';
import Reasons from '../reasons/Reasons';
import Testimonials from '../testimonials/Testimonials';
import Hero from './Hero';

const Home = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Header2 />
            <Hero />
            <Programs />
            <Reasons />
            <Plans />
            <Testimonials />
            <Join />
            <Footer />
        </div>
    );
};

export default Home;
