import React, { Component } from 'react';
import Header from './components/header';
import Content from './components/content';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
