import React from 'react';
import '../styles/Home.css'; // Updated import path for the CSS
import Footer from '../components/Footer';
import Header_LoggedUser from '../components/Header_LoggedUser';
import Header_LogOutUser from '../components/Header_LogOutUser';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import ChatService from "../components/ChatService";

const Home = () => {
    return (
        <div>

            <Header_LogOutUser/>
            <HeroSection/>
            <StatsSection/>
            <ChatService/>
            <Footer/>

        </div>
    );
};

export default Home;