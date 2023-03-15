import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

export default class SelectedBeast extends Component {
  
  
  render() {
    return (
      
      <Modal show = {this.props.display} onHide={this.props.onHide}>
        <Card onClick={this.props.show}>
          <Card.Title>"WOOORRRRRKKKKKKK"</Card.Title>
        </Card>
        <Modal.Footer><Button onClick={this.props.onHide}>Close</Button></Modal.Footer>
      </Modal>
    )
  }
}
  
