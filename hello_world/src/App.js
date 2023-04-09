import React from 'react'
import Products from './components/Products/Products'
import Header from './components/Layout/Header';
const App = () => {
  return (
    <div className='app'>
    <Header></Header>
    <Products/>
    </div>
  );
}

export default App;
