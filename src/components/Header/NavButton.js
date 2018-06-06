import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import '../../App.css';
 
class NavButton extends Component {
  constructor (props) {
    super(props);
    this.state={
        name: props.name,
        url: props.url
    }
  }
  render() {
    return (
      <span className='nav-button'>
        <Link to={this.state.url}>
          {this.state.name}
        </Link> 
      </span>
    );
  }
}

NavButton.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default NavButton;

