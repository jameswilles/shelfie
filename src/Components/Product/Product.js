import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    const itemObj = {
      name: this.props.name,
      price: this.props.price,
      img: this.props.img,
      id: this.props.id
    };
    return(
      <div>
        <p> Product </p>
        <p> {this.props.name} </p>
        <p> {this.props.price} </p>
        <img src={this.props.img} alt='Not Found' />
        <button onClick={() => this.props.deleteProduct(this.props.id)}> Delete </button>
        <button onClick={() => this.props.selectProduct(itemObj)} > Edit </button>
      </div>
    )
  }
}