import React from "react";
import { Page, Button } from "react-onsenui";
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom";

export default class Home extends React.Component {
  render() {
    return (
      <Page>
        <div className="bg_home">
          <img src="images/bg_topimg.jpg" className="bg_home" />
          <img src="images/logo.png" className="logo" />
          <Button
            page="checker1.html"
            className="btn_start"
            onclick="omikuji()">
            START
          </Button>
        </div>
      </Page>
    );
  }
}
