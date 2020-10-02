import React, {Component} from 'react';
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      inventoryList: [
        {name: 'pizza', price: 22.2, img_url: ''},
        {name: 'rice', price: 2, img_url: ''}
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard inventory={this.state.inventoryList} />
        <Form />
      </div>
    );
  }
}

export default App;
