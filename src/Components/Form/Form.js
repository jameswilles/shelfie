import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
  constructor() {
    super()

    this.state = {
      nameInput: '',
      priceInput: '',
      imgInput: ''
    }

    this.handlePrice = this.handlePrice.bind(this)
  }

  handleName = (val) => {
    this.setState({ nameInput: val })
  }

  handlePrice(val) {
    this.setState({ priceInput: val})
  }

  handleImg = (val) => {
    this.setState({ imgInput: val })
  }

  handleCancel = () => {
    this.setState({
      nameInput: '',
      priceInput: '',
      imgInput: ''
    })
  }

  handleAdd = () => {
    let newProduct = {
      item_name: this.state.nameInput,
      price: this.state.priceInput,
      image: this.state.imgInput
    }
    axios.post('/api/product', {newProduct: newProduct})
    .then(res => {
      this.setState({inventoryList: res.data})
      this.handleCancel()
      this.props.getInventory()
    })
    .catch(err => console.log(err))
  }

  
  render() {
    return(
      <div>
        <p> Form </p>
        <input placeholder='Name' onChange={e => this.handleName(e.target.value)} value={this.state.nameInput} />
        <input placeholder='Price' onChange={e => this.handlePrice(e.target.value)} value={this.state.priceInput} />
        <input placeholder='Image URL' onChange={e => this.handleImg(e.target.value)} value={this.state.imgInput} />
        <button onClick={this.handleCancel}> Cancel </button>
        <button onClick={this.handleAdd}> Add to Inventory </button>
      </div>
    )
  }
}