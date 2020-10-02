import React, { Component } from 'react'
import Product from '../Product/Product'

export default class Dashboard extends Component {

  render() {
    const mappedInventory = this.props.inventory.map((item, i) => (
      <Product 
        key={i}
        name={this.props.inventory[i].item}
        price={this.props.inventory[i].price}
        img={this.props.inventory[i].image} />
    ))
    return(
      <div>
        <p> Dashboard </p>
        {mappedInventory}
      </div>
    )
  }
}