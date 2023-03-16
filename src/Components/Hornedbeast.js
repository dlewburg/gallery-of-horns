import React, { Component } from 'react'
import '../css/Hornedbeast.css'
import Card from 'react-bootstrap/Card';

export default class Hornedbeast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorite: 0
    }
  }

  addFavorite = () => {
    this.setState({
      favorite: this.state.favorite + 1
    })
  }

  
  

  render() {
    return (
        <Card bg="success" border="warning" style={{ width: '3 rem' }}>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Img onClick={()=>{this.props.show(this.props.title)}} src={this.props.image_url}
            alt={this.props.description}
            title={this.props.title} />
          <Card.Subtitle>{this.props.description}</Card.Subtitle>
          <Card.Body>
            <Card.Text text="warning" onClick={this.addFavorite}>Favorite</Card.Text>
            <Card.Text>💞 {this.state.favorite}</Card.Text>
          </Card.Body>
        </Card>
    )
  }
}
