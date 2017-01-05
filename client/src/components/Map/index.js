import React from 'react';
import { observer, inject } from 'mobx-react';
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";
import * as actions from '../../actions/';
import uuid from 'uuid';

import './style/index.scss';

@inject('userLocationListStore') @observer
class Map extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    actions.updateUserList();
  }

  getRandomKey() {
    return Math.random(Date.now() * 100);
  }

  render() {
    const { userLocationListStore } = this.props;
    return (
      <section id="map">
        <GoogleMapLoader
          containerElement={
            <div
              style={{
                height: "100%",
              }}
            />
          }
          googleMapElement={
            <GoogleMap
              key={() => uuid.v1()}
              defaultZoom={1}
              defaultCenter={{ lat: 0.0, lng: 0.0 }}
            >
              {userLocationListStore.toJS().map((marker) => {
                return (
                  <Marker
                    {...marker}
                  />
                );
              })}
            </GoogleMap>
          }
        />
      </section>
    );
  }
}

export default Map;
