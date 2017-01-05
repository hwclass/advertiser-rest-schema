import React from 'react';

export default class User extends React.Component {

	constructor(props) {
  super(props);
	}

  render() {
    return (
      <div>
        <span>{this.props.name}, </span>
        <span>{this.props.position.lat}, </span>
        <span>{this.props.position.lng}, </span>
        <span>{this.props.location}</span>
      </div>
    );
  }

}

User.propTypes = {
  name: React.PropTypes.string.isRequired,
  position: React.PropTypes.shape({
    lat: React.PropTypes.number.isRequired,
    lng: React.PropTypes.number.isRequired,
  }),
  location: React.PropTypes.string.isRequired,
  defaultAnimation: React.PropTypes.string,
  zoom: React.PropTypes.string
};
