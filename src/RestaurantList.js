import React from 'react';
import 'materialize-css';
import { Col, Collection, CollectionItem } from 'react-materialize';

const RestaurantList = ({ restaurantNames }) => (
  <Col m={6} s={12}>
    <Collection>
      {
        restaurantNames.map(restaurantName => (
          <CollectionItem key={restaurantName}>
            {restaurantName}
          </CollectionItem>
        ))
      }
    </Collection>
  </Col>
);

export default RestaurantList;
