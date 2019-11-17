import React from "react";
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom";
import { Page, Button, Row, Col } from "react-onsenui";

export default class Quiz extends React.Component {
  render() {
    return (
      <Page>
        <script src="js/questionsService.js"></script>
        <img src="images/topimg_quiz1.jpg" width="100%" />
        <div className="space_h30"></div>
        <div className="waku" ng-controller="gameCtrl as game">
          <h3 className="result_title">
            <span id="qa_num">3/10問目</span>
          </h3>
          <div className="space_h10"></div>
          <span id="swing-long-result" className="quiz_description">
            右左折などをしようとするときの合図は、その行為をしようとする約３秒前に出す。
          </span>
          <div className="space_h30"></div>
          <Row>
            <img src="images/space.png" width="5%" />
            <Col width="40%" align="center">
              <div className="choice">
                <Button className="button button--large--cta">○</Button>
              </div>
            </Col>
            <img src="images/space.png" width="10%" />
            <Col width="40%" align="center">
              <div className="choice">
                <Button className="button button--large--cta">×</Button>
              </div>
            </Col>
            <img src="images/space.png" width="5%" />
          </Row>
        </div>
        <div className="waku" ng-controller="gameCtrl as game">
          <h3 className="result_title">
            <span id="qa_num">正解は「×」</span>
          </h3>
          <div className="space_h10"></div>
          <span id="swing-long-result" className="quiz_description">
            右左折しようとする３０メートル手前の地点で合図を出します。
          </span>
        </div>
      </Page>
    );
  }
}
