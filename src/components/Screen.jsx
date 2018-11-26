import React from 'react';
import PropTypes from 'prop-types';

class Screen extends React.Component {
 constructor(props) {
  super(props);
  this.state = {};
 }

 render() {
  return (
   <div>
    <input type="text" name="screen" />
   </div>
  );
 }
}

Screen.propTypes = {};

export default Screen;
