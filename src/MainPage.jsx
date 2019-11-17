import React from "react";
// eslint-disable-next-line no-unused-vars
import ReactDOM from "react-dom";
import { Toolbar, Page, Button } from "react-onsenui";

import SecondPage from "./SecondPage";
import Home from "./Home";
import Quiz from "Quiz";

export default class MainPage extends React.Component {
  pushPage() {
    this.props.navigator.pushPage({ component: SecondPage });
  }
  homePage() {
    this.props.navigator.pushPage({ component: Home });
  }
  quizPage() {
    this.props.navigator.pushPage({ component: Quiz });
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className="center">Navigator</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <p style={{ textAlign: "center" }}>
          <Button onClick={this.pushPage.bind(this)}>Push page</Button>
        </p>
        <p style={{ textAlign: "center" }}>
          <Button onClick={this.homePage.bind(this)}>Push page</Button>
        </p>
        <p style={{ textAlign: "center" }}>
          <Button onClick={this.quizPage.bind(this)}>Push page</Button>
        </p>
      </Page>
    );
  }
}
