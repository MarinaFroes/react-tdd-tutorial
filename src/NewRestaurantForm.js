import React, { Component } from 'react';
import 'materialize-css';
import { Row, Button, TextInput } from 'react-materialize';

class NewRestaurantForm extends Component {
  state = { inputText: '' };

  handleTextChange = (event) => {
    this.setState({ inputText: event.target.value });
  }

  handleSave = () => {
    const { inputText } = this.state;
    const { onSave } = this.props;

    onSave(inputText);
  }

  render() {
    return (
      <Row>
        <TextInput
          s={12} m={8} l={10}
          id="TextInput-4"
          label="Restaurant name"
          data-test="newRestaurantName"
          onChange={this.handleTextChange}
        />
        <Button
          s={12} m={4} l={2}
          data-test="saveNewRestaurantButton"
          onClick={this.handleSave}
          waves="light"
        >
          Save
        </Button>
      </Row>
    );
  }
}

export default NewRestaurantForm;
