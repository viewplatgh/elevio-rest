import React from 'react';
import './App.css';

import Header from './components/Header';
import Search from './containers/Search';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Search />
      </div>
    </div>
  );
}

export default App;
