import React from 'react';
import CityList from './city_list';
import ActiveCity from './active_city';

const App = () => {
  return (
    <div className="app">
      <CityList />
      <ActiveCity />
    </div>
  );
};

export default App;
