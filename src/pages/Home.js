import React from 'react';
import Countries from '../components/Countries';
import EnchereChecker from '../components/EnchereCheker';
import EnchereComponent from '../components/EnchereComponent';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Recherche2 from '../components/Recherche2';

const Home = () => {
    return (
        <div>
            <div><Navigation/></div>
            <br/>
            <br/>
            <div><Recherche2/></div>
            {/* <EnchereChecker/> */}
        </div>
    );
};

export default Home;