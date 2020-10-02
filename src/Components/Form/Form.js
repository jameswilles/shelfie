import React, { Component } from 'react'

export default class Form extends Component {
  constructor() {
    super()

    this.state = {
      nameInput: '',
      priceInput: null,
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
      priceInput: null,
      imgInput: ''
    })
  }

  handleAdd = () => {

  }
  
  render() {
    return(
      <div>
        <p> Form </p>
        <input placeholder='Name' onChange={e => this.handleName(e.target.value)} value={this.state.nameInput} />
        <input placeholder='Price' onChange={e => this.handlePrice(e.target.value)} value={this.state.priceInput} />
        <input placeholder='Image URL' onChange={e => this.handleImg(e.target.value)} value={this.state.imgInput} />
        <button onClick={this.handleCancel}> Cancel </button>
        <button> Add to Inventory </button>
      </div>
    )
  }
}