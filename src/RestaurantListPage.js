import React, { Component } from 'react';
import 'materialize-css';
import { Row, Button } from 'react-materialize';

import NewRestaurantForm from './NewRestaurantForm';
import RestaurantList from './RestaurantList';

class RestaurantListPage extends Component {
  state = {
    restaurantNames: [],
    showNewRestaurantForm: false,
  }

  handleShowNewRestaurantForm = () => {
    this.setState({
      showNewRestaurantForm: true,
    });
  }

  handleAddRestaurant = (newRestaurantName) => {
    this.setState(state => ({
      restaurantNames: [
        newRestaurantName,
        ...state.restaurantNames,
      ],
      showNewRestaurantForm: false,
    }));
  }

  render() {
    const { restaurantNames, showNewRestaurantForm } = this.state;
    return (
      <div>
        <Row>
          <Button
            data-test="addRestaurantButton"
            onClick={this.handleShowNewRestaurantForm}
            style={{
              marginTop: '20px',
              marginLeft: '20px',
            }}
            waves="light"
          >
            Add Restaurant
          </Button>
        </Row>
        <Row>
          {
            showNewRestaurantForm && <NewRestaurantForm onSave={this.handleAddRestaurant} />
          }
        </Row>
        <Row>
          <RestaurantList restaurantNames={restaurantNames} />
        </Row>
      </div>
    );
  }
}

export default RestaurantListPage;
