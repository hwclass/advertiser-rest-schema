import React from 'react';
import { Well } from 'react-bootstrap';
import { observer, inject } from 'mobx-react';

// actions
import * as actions from '../../actions/';

// style
import './style/index.scss';

@inject('appStore') @observer
export default class EndpointStringSection extends React.Component {
  constructor(props) {
    super(props);
    this.defaultDataType = 'json';
  }
  componentDidMount() {
    actions.getFileTypes();
    actions.getAdvertisers(this.defaultDataType);
  }

  render() {
    const { appStore } = this.props;
    return (
      <Well>
        <span className="method">{appStore.method}</span>
        <span className="endpoint">{appStore.url}</span>
      </Well>
    );
  }

}
