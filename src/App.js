import React from 'react';
import './App.css';

import Search from './containers/Search';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Elevio rest app by Rob Lao</h1>
        <Search />
      </div>
    </div>
  );
}

export default App;
