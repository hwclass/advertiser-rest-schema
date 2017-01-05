import React from 'react';
import mobx from 'mobx';
import { observer, inject } from 'mobx-react';
import { Well } from 'react-bootstrap';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/styles';

import './style/index.scss';

@inject('advertisersStore') @observer
@inject('fileTypesStore') @observer
export default class EndpointDetailSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { fileTypesStore, advertisersStore } = this.props;
    return (
      <Well className="endpointDetails">
        <p>
          <span className="protocol bold">HTTP</span>
          <span className="statusCode bold">200</span>
          <span className="statusString bold">OK</span>
        </p>
        <p>
          <span className="httpHeader vary bold">Vary:</span>
          <span className="httpHeaderValue accept">Accept</span>
        </p>
        <p>
          <span className="httpHeader allow bold">Allow:</span>
          <span className="httpHeaderValue methods">GET, POST, HEAD, OPTIONS</span>
        </p>
        <p>
          <span className="httpHeader contentType bold">Content-Type:</span>
          <span className="httpHeaderValue applicationType">application/{fileTypesStore.selectedFileType}</span></p>
        <p>
          <SyntaxHighlighter
            language={(advertisersStore.selectedFileType === 'json' ? 'json' : 'xml')}
            style={tomorrow}
          >
            {JSON.stringify(mobx.toJS(advertisersStore.advertisers))}
        </SyntaxHighlighter>
        </p>
      </Well>
    );
  }
}
