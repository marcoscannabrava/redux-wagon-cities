/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import setActiveCity from '../actions/index';

// eslint-disable-next-line react/prefer-stateless-function
class City extends Component {
  render() {
    return (
      <p
        className="list-group-item"
        id={this.props.id}
        onClick={() => this.props.setActiveCity(this.props.city)}
      >
        <b>{this.props.city.name}</b>
      </p>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setActiveCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(City);

