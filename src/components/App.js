import React, { Component } from 'react';
import '../stylesSheet/App.scss';
import data from '../data/data.json';

class App extends Component {
  render() {
    console.log(data);
    return <div className="App">Hola Sagra </div>;
  }
}

export default App;
