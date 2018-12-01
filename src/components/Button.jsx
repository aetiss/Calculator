import React, { Component } from "react";

class Button extends Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-dark btn-lg btn-block"
          onClick={this.handleClick}
        >
          {this.props.name}
        </button>
      </div>
    );
  }
}

export default Button;
