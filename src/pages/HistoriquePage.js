import React from 'react';
import Historique from '../components/Historique';
import Navigation from '../components/Navigation';

function HistoriquePage(props) {
    return (
        <div>
            <Navigation/>
            <br/>
            <br/>
            <Historique/>
        </div>
    );
}

export default HistoriquePage;