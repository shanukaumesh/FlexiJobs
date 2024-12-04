import React from "react";
import AboutHero from "../components/AboutHero";
import Header_LoggedUser from "../components/Header_LoggedUser";
import Footer from "../components/Footer";
import AboutBody from "../components/AboutBody";
import ChatService from "../components/ChatService";

const AboutPage = () => {
    return (
        <div>

            <Header_LoggedUser/>    
            <AboutHero/>
            <AboutBody/>
            <ChatService/>
            <Footer/>

        </div>
    );
};

export default AboutPage ;