import React from "react";
import PropTypes from "prop-types";
class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: ""
    };
  }

  handleChange = event => {
    this.setState({ displayText: event.target.value });
  };

  render() {
    return (
      <div className="card mt-5 w-50">
        <div className="card-body text-right">{this.props.value}</div>
      </div>
    );
  }
}

Screen.propTypes = {
  value: PropTypes.string
};

export default Screen;
