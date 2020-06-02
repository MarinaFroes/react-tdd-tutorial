import React from 'react';

const RestaurantList = ({ restaurantNames }) => (
  restaurantNames.map(restaurantName => (
    <li key={restaurantName}>{restaurantName}</li>
  ))
);

export default RestaurantList;
