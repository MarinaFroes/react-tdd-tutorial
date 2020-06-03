import React, { Component } from 'react';
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
        <button
          data-test="addRestaurantButton"
          onClick={this.handleShowNewRestaurantForm}
        >
          Add Restaurant
        </button>
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
