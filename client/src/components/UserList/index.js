import React from 'react';
import { observer, inject } from 'mobx-react';
import User from '../../components/User/';
import uuid from 'uuid';

@inject('userLocationListStore') @observer
export default class UserList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { userLocationListStore } = this.props;
    return (
      <div>
        {
          userLocationListStore.locationList.map((user) => {
            return <User key={uuid.v1()} name={user.name} position={user.position} location={user.location}/>;
          })
        }
      </div>
    );
  }

}
