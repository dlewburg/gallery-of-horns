import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

export default class SelectedBeast extends Component {
  
  
  render() {
    console.log(this.props)
    return (
      
      <Modal show = {this.props.display} onHide={this.props.onHide}>
        <Card bg="success" border="warning" style={{ width: '3 rem'}}>
          <Card.Title>{this.props.selectedBeast.title}</Card.Title>
          <Card.Img src={this.props.selectedBeast.image_url}></Card.Img>
          <Card.Body>
            <Card.Text text="warning">{this.props.selectedBeast.description}</Card.Text>
          </Card.Body>
        </Card>
        <Modal.Footer><Button onClick={this.props.onHide}>Close</Button></Modal.Footer>
      </Modal>
    )
  }
}
  
