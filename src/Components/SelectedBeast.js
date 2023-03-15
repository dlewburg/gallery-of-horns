import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';

export default class SelectedBeast extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false
      // selectedBeast: {}
      // selectedBeastIimg:''
      // selectedBeastDesc:''
    }
  }
  
  closeModal = () => {
    this.setState({
      showModal: false
    })
  }
  
  openModal = () => {
    this.setState ({
      showModal: true
    })
  }
  render() {
    return (
      <Modal />
    )
  }
}
