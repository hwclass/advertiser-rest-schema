import React from 'react';
import mobx from 'mobx';
import { observer, inject } from 'mobx-react';

// actions
import * as actions from '../../actions/';

// bootstrap
import { Well } from 'react-bootstrap';

// SyntaxHightligher
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/styles';

// style
import './style/index.scss';

@inject('appStore') @observer
@inject('advertisersStore') @observer
@inject('fileTypesStore') @observer
export default class EndpointDetailSection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    actions.setFileType('json');
  }

  render() {
    const { appStore, fileTypesStore, advertisersStore } = this.props;
    return (
      <Well className="endpointDetails">
        <p>
          <span className="protocol bold">HTTP</span>
          <span className="statusCode bold">{appStore.statusCode}</span>
          <span className="statusString bold">{appStore.statusString}</span>
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
          <span className="httpHeaderValue applicationType">application/{fileTypesStore.selectedFileType}</span>
        </p>
        <SyntaxHighlighter
          language={(fileTypesStore.selectedFileType === 'json' ? fileTypesStore.selectedFileType : 'xml')}
          style={tomorrow}
        >
          {
            (fileTypesStore.selectedFileType === 'xml'
              ? unescape(mobx.toJS(advertisersStore.advertisers))
              : JSON.stringify(mobx.toJS(advertisersStore.advertisers))
            )
          }
        </SyntaxHighlighter>
      </Well>
    );
  }
}
