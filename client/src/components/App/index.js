import React from 'react';
import TopRedLine from '../TopRedLine';
import Header from '../Header';

// constants
import { APP_TITLE, APP_VERSION } from '../../constants';

// style
import './style/index.scss';

const App = ({ children }) => {
  return (
    <div>
      <TopRedLine/>
      <Header title={APP_TITLE} version={APP_VERSION}/>
      {children}
    </div>
  );
};

export default App;
