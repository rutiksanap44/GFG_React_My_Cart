import React from 'react';
import ListItem from './components/ListItems';
const App = () => {
  return (
    <div>
      <ListItem data={{
        title : "My product 1",
        discountedPrice : 340,
        price : 400,
        thumbnail : "/assets/random.jpg"
      }}></ListItem>

      <ListItem data={{
        title : "My product 2",
        discountedPrice : 500,
        price : 460,
        thumbnail : "/assets/random.jpg"
      }}></ListItem>
    </div>
  );
}

export default App;
