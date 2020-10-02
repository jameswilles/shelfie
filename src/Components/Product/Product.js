import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return(
      <div>
        <p> Product </p>
        <p> {this.props.name} </p>
        <p> {this.props.price} </p>
        <img src={this.props.img} alt='' />
      </div>
    )
  }
}