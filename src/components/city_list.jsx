import React, { Component } from 'react';
import City from './city';

// eslint-disable-next-line react/prefer-stateless-function
class CityList extends Component {
  renderList = () => {
    return this.props.cities.map(city => <City id={city.slug} key={city.slug} {...city} />);
  }

  render() {
    return (
      <div className="city-list">
        {this.renderList()}
      </div>
    );
  }
}

export default CityList;
