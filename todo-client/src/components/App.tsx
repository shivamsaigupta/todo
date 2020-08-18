import React from 'react';
import Header from './Header';
import Content from './Content';
import CreateItem from './CreateItem';

const App = () => {
  return(
    <div className="ui container">
      <Header />
      <Content />
      <CreateItem />
    </div>
  )
}

export default App;
