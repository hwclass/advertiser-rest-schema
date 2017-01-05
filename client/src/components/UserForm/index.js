import React from 'react';
import ReactDOM from 'react-dom';
import * as actions from '../../actions/';
import { DEFAULT_ANIMATION, ZOOM } from '../../constants/map';
import Input from '../Input';
import User from '../../models/User';
import uuid from 'uuid';

export default class UserForm extends React.Component {

  constructor(props) {
    super(props);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleSubmit(e) {
    e.preventDefault();
    actions.saveUser({
      key: uuid.v4(),
      name: new User(ReactDOM.findDOMNode(this.refs.name).value),
      position: {
        lat: parseFloat(ReactDOM.findDOMNode(this.refs.lat).value),
        lng: parseFloat(ReactDOM.findDOMNode(this.refs.lng).value)
      },
      location: ReactDOM.findDOMNode(this.refs.location).value,
      defaultAnimation: DEFAULT_ANIMATION,
      zoom: ZOOM
    });
  }

  render() {
    return (
      <div>
        <form method="post" onSubmit={this.onHandleSubmit}>
          <Input ref="name" name=""/>
          <Input ref="lat" lat=""/>
          <Input ref="lng" lng=""/>
          <Input ref="location" location=""/>
          <button type="submit">Add User</button>
        </form>
      </div>
    );
  }

}
