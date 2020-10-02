import React, { Component } from 'react'
import Product from '../Product/Product'

export default class Dashboard extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    const mappedInventory = this.props.inventory.map((item, i) => (
      <Product 
        name={this.props.inventory[i].name}
        price={this.props.inventory[i].price}
        img={this.props.inventory[i].img_url} />
    ))
    return(
      <div>
        <p> Dashboard </p>
        {mappedInventory}
      </div>
    )
  }
}