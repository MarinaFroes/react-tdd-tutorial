import React from 'react';
import 'materialize-css';
import { Collection, CollectionItem } from 'react-materialize';

const RestaurantList = ({ restaurantNames }) => (
  <Collection header="Restaurants">
    {
      restaurantNames.length === 0 ? (
        <CollectionItem style={{ color: 'grey' }}>
          You didn't add any restaurants yet
        </CollectionItem>
      ) : restaurantNames.map(restaurantName => (
        <CollectionItem key={restaurantName}>
          {restaurantName}
        </CollectionItem>
      ))
    }
  </Collection>
);

export default RestaurantList;
