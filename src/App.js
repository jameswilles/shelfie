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
      inventoryList: [],
      selectedProduct: null
    }

    this.getInventory = this.getInventory.bind(this)
  }

  getInventory() {
    axios.get('/api/inventory')
    .then(res => {
      this.setState({ inventoryList: res.data})
      console.log(this.state.inventoryList)
    })
    .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getInventory()
  }

  selectProduct = (productObj) => {
    this.setState({selectedProduct: productObj})
    console.log(productObj)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard 
          inventory={this.state.inventoryList}
          getInventory={this.getInventory}
          selectProduct={this.selectProduct} />
        <Form 
          getInventory={this.getInventory} 
          selectedProduct={this.state.selectedProduct}
           />
      </div>
    );
  }
}

export default App;
