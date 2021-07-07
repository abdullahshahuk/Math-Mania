import React from 'react';
// import Level0 from './Level0';
import "../App.css";

import LevelSelectTitle from '../Assets/LevelSelectTitle.png';
import Arrow from '../Assets/arrow.png';
import Level0CLloud from '../Assets/Level0Cloud.png';
import Level1Cloud from '../Assets/Level1Cloud.png';
import Level2Cloud from '../Assets/Level2Cloud.png';

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
                <div>
                    <div className="cloudPadding">
                        <a href="/Level0">
                            <img src={Level0CLloud} />
                        </a>
                    </div>

                    <div className="cloudPadding">
                        <a href="/Level1">
                            <img src={Level1Cloud} />
                        </a>
                    </div>

                    <div className="cloudPadding">
                        <a href="/Level2">
                            <img src={Level2Cloud} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectLevel;
