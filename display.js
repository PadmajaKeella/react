import React, { Component } from 'react'

export default class display extends Component {
  render() {
    return (
      <div>
        {this.props.data.map(product => <li key={product.id}>{product.title}</li>)}     
    </div>
    )
  }
}
