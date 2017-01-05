import React from 'react';

export default class Input extends React.Component {

	constructor(props) {
  super(props);
	}

  render() {
    return (
      <input type="text" defaultValue=""/>
    );
  }

}

Input.propTypes = {
  name: React.PropTypes.string,
  lat: React.PropTypes.string,
  lng: React.PropTypes.string,
  location: React.PropTypes.string
};
