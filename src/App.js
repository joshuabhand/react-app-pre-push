import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './form.js';
import NameTag from './name-tag.js'

class App extends Component {
  render() {
    return (
      <div className="App">

        <textarea rows='4'>
          {'Bob\nJim\nJoe\n'}
        </textarea>

        <Form />

        <NameTag greeting='greet' name='name'/>

      </div>
    );
  }
}

export default App;
