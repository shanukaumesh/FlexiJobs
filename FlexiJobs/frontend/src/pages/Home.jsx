import React from 'react';
import '../styles/Home.css'; // Updated import path for the CSS
import Footer from '../components/Footer';
import Header_LoggedUser from '../components/Header_LoggedUser';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';

const Home = () => {
    return (
        <div>

            <Header_LoggedUser/>
            <HeroSection/>
            <StatsSection/>
            <Footer/>

        </div>
    );
};

export default Home;