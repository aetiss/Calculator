import React from "react";
import Keypad from "./Keypad";
import Screen from "./Screen";
import calculate from "../service/calculate";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }
  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <Screen value={this.state.next || this.state.total || "0"} />
            </div>
          </div>
          <div className="row">
            <div className="col mt-4 d-flex justify-content-center">
              <Keypad clickHandler={this.handleClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
