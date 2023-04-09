import React from 'react'
import Products from './components/Products/Products'
import Header from './components/Layout/Header';
import SubHeader from './components/Layout/SubHeader';
const App = () => {
  return (
    <div className='app'>
    <Header></Header>
    <SubHeader></SubHeader>
    <Products/>
    </div>
  );
}

export default App;
