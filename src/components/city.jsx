/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class City extends Component {
  handleClick = (event) => {
    this.props.select(event.target.id);
  }

  render() {
    return (
      <p
        className="list-group-item"
        id={this.props.id}
        onClick={this.handleClick}
        onKeyDown={this.handleClick}
      >
        <b>{this.props.name}</b>
      </p>
    );
  }
}

export default City;
