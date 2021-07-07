import React from 'react';
// import Level0 from './Level0';
import "../App.css";

import LevelSelectTitle from '../Assets/LevelSelectTitle.png';
import Arrow from '../Assets/arrow.png';

const SelectLevel = () => {
    return (
        <div>
            <a href="/MainAppPage">
            <img src={Arrow} width="10%" className="arrowPadding" />
            </a>
            <div className="App">
                <div className="levelSelectTitle">
                    <img src={LevelSelectTitle} />
                </div>
            </div>
        </div>
    );
};

export default SelectLevel;
