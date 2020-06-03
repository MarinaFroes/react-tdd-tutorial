import React, { Component } from 'react';
import 'materialize-css';
import { Button } from 'react-materialize';

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
        {
          showNewRestaurantForm
          && <NewRestaurantForm onSave={this.handleAddRestaurant} />
        }
        <RestaurantList restaurantNames={restaurantNames} />
      </div>
    );
  }
}

export default RestaurantListPage;
