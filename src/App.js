import React, {Component} from 'react';
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()

    this.state = {
      inventoryList: []
    }

    this.getInventory = this.getInventory.bind(this)
  }

  getInventory() {
    axios.get('/api/inventory')
    .then(res => {
      this.setState({ inventoryList: res.data})
    })
    .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getInventory()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard 
          inventory={this.state.inventoryList}
          getInventory={this.getInventory} />
        <Form getInventory={this.getInventory} />
      </div>
    );
  }
}

export default App;
