import React from 'react';
import "../App.css";

import MathMania from '../Assets/MathMania.png';
import Rocket from '../Assets/rocket.png';

import { Card } from 'reactstrap';



const MainAppPage = () => {
    return (
        <div className="App">
            <div className="mathManiaPadding">
                <img src={MathMania} />
            </div>
            <div className="mathManiaButtonPadding">
            <a href="/selectLevel">
                <Card style={{ borderRadius:"100%" , backgroundColor:"#020269"}}>
                        <img src={Rocket} width="%" />
                </Card>
                </a>
            </div>
            <div className="App pressStart">
                <h3>PRESS TO START!</h3>
            </div>
        </div>
    );
}

export default MainAppPage;