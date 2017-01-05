import React from 'react';
import { Well } from 'react-bootstrap';

import './style/index.scss';

const EndpointStringSection = () => {
  return (
    <Well>
      <span className="method">GET</span>
      <span className="endpoint">/advertisers/?format=api</span>
    </Well>
  );
};

export default EndpointStringSection;
