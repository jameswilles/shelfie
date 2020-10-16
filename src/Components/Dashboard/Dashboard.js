import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'

export default class Dashboard extends Component {
  deleteProduct = (id) => {
    axios.delete(`api/product/${id}`)
    .then(this.props.getInventory())
    .catch(err => {console.log(err)})
  }

  render() {
    const mappedInventory = this.props.inventory.map((item, i) => (
        <Product 
          key={i}
          name={this.props.inventory[i].item_name}
          price={this.props.inventory[i].price}
          img={this.props.inventory[i].image}
          id={this.props.inventory[i].product_id}
          deleteProduct={this.deleteProduct}
          selectProduct={this.props.selectProduct} />  
    ))
    return(
      <div>
        <p> Dashboard </p>
        {mappedInventory}
      </div>
    )
  }
}