import React from 'react';
import '../styles/Home.css'; // Updated import path for the CSS
import Footer from '../components/Footer';
import Header_LogOutUser from '../components/Header_LogOutUser';
import Header_LoggedUser from '../components/Header_LoggedUser';

const Home = () => {
    return (
        <div>

            <Header_LoggedUser/>
            <h1>Hello</h1>
            <Footer/>

        </div>
    );
};

export default Home;