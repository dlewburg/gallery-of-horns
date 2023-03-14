import React, { Component } from 'react'
import '../css/Hornedbeast.css'

export default class Hornedbeast extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      favorite: 0
    }
  }

  // Method to update state for each beast to track likes
  
  render() {
    return (
    <section>
      <h2>{this.props.title}</h2>

      <img src={this.props.image_url}
        alt={this.props.description}
        title={this.props.title} />

      <p>{this.props.description}</p>
      <p>❣️Favorite {this.state.favorite}❣️</p>
      <p>Choose As Favorite</p>
    </section>
    )
  }
}
