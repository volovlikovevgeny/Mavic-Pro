import React from 'react';

import Navigation from './components/navigation/navigation.component';
import Home from './components/home/home.component';
import Products from './components/products/products.component';
import Advantages from './components/advantages/advantages.component';
import Specification from './components/specification/specification.component';
import Questions from './components/questions/questions.component';
import Contacts from './components/contacts/contacts.component';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Home />
        <Products />
        <Advantages />
        <Specification />
        <Questions />
        <Contacts />

      </div>
    )
  }
}

export default App;