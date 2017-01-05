import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import InnerHeader from '../InnerHeader';
import EndpointStringSection from '../EndpointStringSection';
import EndpointDetailSection from '../EndpointDetailSection';

import './style/index.scss';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={12} lg={12}>
            <InnerHeader/>
            <EndpointStringSection/>
            <EndpointDetailSection/>
          </Col>
        </Row>
      </Grid>
    );
  }

}
