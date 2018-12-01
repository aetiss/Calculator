import React, { Component } from "react";
import "../styles/keypad.css";
import Button from "./Button";

class Keypad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <Button name="7" clickHandler={this.handleClick} />
          </div>
          <div className="col">
            <Button name="8" clickHandler={this.handleClick} />
          </div>
          <div className="col">
            <Button name="9" clickHandler={this.handleClick} />
          </div>
          <div className="col">
            <Button name="&#247;" clickHandler={this.handleClick} />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Button name="4" clickHandler={this.handleClick} />
          </div>
          <div className="col">
            <Button name="5" clickHandler={this.handleClick} />
          </div>
          <div className="col">
            <Button name="6" clickHandler={this.handleClick} />
          </div>
          <div className="col">
            <Button name="&#215;" clickHandler={this.handleClick} />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Button name="1" clickHandler={this.handleClick} />
          </div>
          <div className="col">
            <Button name="2" clickHandler={this.handleClick} />
          </div>
          <div className="col">
            <Button name="3" clickHandler={this.handleClick} />
          </div>
          <div className="col">
            <Button name="&minus;" clickHandler={this.handleClick} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Button name="C" clickHandler={this.handleClick} />
          </div>
          <div className="col">
            <Button name="0" clickHandler={this.handleClick} />
          </div>
          <div className="col">
            <Button name="=" clickHandler={this.handleClick} />
          </div>
          <div className="col">
            <Button name="+" clickHandler={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default Keypad;
