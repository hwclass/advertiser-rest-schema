import React from 'react';
import mobx from 'mobx';
import { observer, inject } from 'mobx-react';
import { Well } from 'react-bootstrap';

// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { tomorrow } from 'react-syntax-highlighter/dist/styles';

import CodeMirror from 'react-codemirror';
require('codemirror/mode/javascript/javascript');

import './style/index.scss';

@inject('appStore') @observer
@inject('advertisersStore') @observer
@inject('fileTypesStore') @observer
export default class EndpointDetailSection extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { appStore, fileTypesStore, advertisersStore } = this.props;
    const options = {
      lineNumbers: false,
      readOnly: true,
      nocursor: true,
      mode: 'xml',
      htmlMode: true,
      matchClosing: true,
      indentUnit: 2,
      tabSize: 2,
      showCursorWhenSelecting: false,
      cursorHeight: 0
    };
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
        <div>
          <CodeMirror
            value={JSON.stringify(mobx.toJS(advertisersStore.advertisers))}
            options={options}
          />
        </div>
      </Well>
    );
  }
}
