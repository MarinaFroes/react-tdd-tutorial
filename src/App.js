import React from 'react';
import RestaurantListPage from './RestaurantListPage';
import { Col, Row } from 'react-materialize';

class App extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col
            l={8}
            m={10}
            s={12}
            offset="m1 l2"
          >
            <RestaurantListPage />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
