import React from "react";
import { Row, Col, Card, Container, Button } from "reactstrap";
import "../App.css";
import Arrow from '../Assets/arrow.png';

const Level0 = (props) => {
    return (
        <div>
            <a href="/selectLevel">
            <img src={Arrow} width="10%" className="arrowPadding"/>
            </a>
            <div>
                <Row>
                    <Col xs="6" sm="4"><h2 className="whiteScoreQuestion scorePadding">Score: 3</h2></Col>
                    <Col xs="6" sm="4"><h2 className="whiteScoreQuestion">Question: 3/10</h2></Col>
                </Row>
            </div>

            <div className="App TimeCard">
                <Card style={{ width: "90%", height: "10vh" }}>
                    <div className="timePadding">
                        <h1>Endless Time Mode</h1>
                    </div>
                </Card>
            </div>

            <div className="App">
                <div className="equationPadding">
                    <h1 className="equationBold">3 × 6 = 18?</h1>
                </div>
            </div>

            <div className="App">
                <div className="trueFalseCard">
                    <Row>
                        <Col xs="6" sm="4"><Button style={{ backgroundColor:"#59ff78", borderColor:"#59ff78", height:"30vh", width:"80%", borderRadius:"10%"}}><h2 className="h2TrueFalse">True</h2></Button></Col>
                        <Col xs="6" sm="4"><Button style={{ backgroundColor:"#ff6186", borderColor:"#ff6186", height:"30vh", width:"80%", borderRadius:"10%" }}><h2 className="h2TrueFalse">False</h2></Button></Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Level0;