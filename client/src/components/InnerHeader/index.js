import React from 'react';
import { PageHeader, SplitButton, MenuItem } from 'react-bootstrap';
import { observer, inject } from 'mobx-react';
import * as actions from '../../actions/';
import uuid from 'uuid';

import './style/index.scss';

@inject('fileTypesStore') @observer
export default class InnerHeader extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(target, prop) {
    const fileType = prop.target.innerHTML;
    actions.setFileType(fileType);
    actions.getAdvertisers(fileType);
  }

  render() {
    const { fileTypesStore } = this.props;
    return (
      <PageHeader className="innerHeader">
        Advertiser List
        <div className="pull-right">
          <SplitButton
            bsStyle={'primary'}
            title={(fileTypesStore.selectedFileType ? fileTypesStore.selectedFileType.toUpperCase() : 'JSON')}
            key={uuid.v4()}
            id={`split-button-${uuid.v4()}`}
            onSelect={this.onClick}
            pullRight
          >
            {
              fileTypesStore.fileTypes.map((fileType) => {
                return <MenuItem key={uuid.v4()} eventKey="1">{fileType}</MenuItem>;
              })
            }
          </SplitButton>
        </div>
      </PageHeader>
    );
  }
}
