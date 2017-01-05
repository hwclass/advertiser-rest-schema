import React from 'react';
import TopRedLine from '../TopRedLine';
import Header from '../Header';

import './style/index.scss';

const App = ({ children }) => {
  return (
    <div>
      <TopRedLine/>
      <Header/>
      {children}
    </div>
  );
};

export default App;
