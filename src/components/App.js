import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      posi: 0,
      ballPosition: { left: "0px" },
    };
    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  buttonClickHandler() {
    this.setState({
      ...this.state,
      renderBall: true,
    });
    this.renderBallOrButton();
  }
  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }
  }

  // bind ArrowRight keydown event
  componentDidMount() {
    window.addEventListener("keydown", (e) => {
 
      if (e.key == "ArrowRight") {
        this.setState({
          ...this.state,
          posi: this.state.posi + 5,
          ballPosition: { left: this.state.posi + 5 + "px" },
        });
      }else if(e.key == "ArrowLeft"){
        this.setState({
            ...this.state,
            posi: this.state.posi - 5,
            ballPosition: { left: this.state.posi - 5 + "px" },
          });
      }
    });
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;
