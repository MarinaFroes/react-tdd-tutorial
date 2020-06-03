import React, { Component } from 'react';
import 'materialize-css';
import { Button, TextInput } from 'react-materialize';

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
      <div>
        <TextInput
          id="TextInput-4"
          label="Restaurant name"
          data-test="newRestaurantName"
          onChange={this.handleTextChange}
          style={{
            width: '50%',
          }}
        />
        <Button
          data-test="saveNewRestaurantButton"
          onClick={this.handleSave}
          style={{
            marginTop: '20px',
            marginLeft: '20px',
          }}
          waves="light"
        >
          Save
        </Button>
      </div>
    );
  }
}

export default NewRestaurantForm;
