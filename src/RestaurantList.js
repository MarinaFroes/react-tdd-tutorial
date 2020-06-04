import React from 'react';
import 'materialize-css';
import { Collection, CollectionItem } from 'react-materialize';

const RestaurantList = ({ restaurantNames }) => (
  <Collection header="Restaurants">
    <RestaurantItems restaurantNames={restaurantNames} />
  </Collection>
);

const RestaurantItems = ({ restaurantNames }) => (
  restaurantNames.length === 0
    ? <NoRestaurantItems />
    : <SomeRestaurantItems restaurantNames={restaurantNames} />
);

const NoRestaurantItems = () => (
  <CollectionItem style={{ color: 'grey' }}>
    You didn't add any restaurants yet
  </CollectionItem>
);

const SomeRestaurantItems = ({ restaurantNames }) => (
  restaurantNames.map(restaurantName => (
    <CollectionItem key={restaurantName}>
      {restaurantName}
    </CollectionItem>
  ))
);

export default RestaurantList;
