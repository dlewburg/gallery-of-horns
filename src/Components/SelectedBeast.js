import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import '../css/SelectedBeast.css'

export default class SelectedBeast extends Component {
  
  
  render() {
    return (
      
      <Modal show = {this.props.show} onHide={this.props.onHide} centered >
        <Modal.Header closeButton onClick={this.props.onHide}><Modal.Title>{this.props.selectedBeast.title}</Modal.Title></Modal.Header>
          <Modal.Body>
            <img src={this.props.selectedBeast.image_url} alt={this.props.selectedBeast.description}/>
            <p>{this.props.selectedBeast.description}</p>
          </Modal.Body>
      </Modal>
    )
  }
}
  
