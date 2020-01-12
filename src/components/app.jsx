import React from 'react';
import CityList from './city_list';
import cities from '../../data/cities';

const App = () => {
  return (
    <div className="app">
      <div className="cities">
        <CityList cities={cities} />
      </div>
      <div className="active-city">

      </div>
    </div>
  );
};

export default App;
