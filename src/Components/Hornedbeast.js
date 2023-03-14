import React, { Component } from 'react'
import '../css/Hornedbeast.css'

export default class Hornedbeast extends Component {
  render() {
    return (
      <section>
        <h2>{this.props.title}</h2>

        <img src={this.props.image_url}
          alt={this.props.description}
          title={this.props.title} />

        <p>{this.props.description}</p>
        <p>❣️Favorite❣️</p>
        <p>Choose Favorite</p>
      </section>
    )
  }
}
