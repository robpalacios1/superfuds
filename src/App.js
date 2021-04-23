import React from 'react';

/***** Components *****/
import Header from './components/Header';
import Card from './components/Card'
import Basket from './components/Basket';

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Basket/>
    </div>
  );
}

export default App;
