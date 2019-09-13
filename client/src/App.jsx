import React, { Component } from 'react';
import ExampleComponent from './components/Example/Example.jsx';
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <section className="app">
        <ExampleComponent />
      </section>
    );
  }
};
