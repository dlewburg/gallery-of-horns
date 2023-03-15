// Rebuild as a class component

//1st Imports
import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Modal from 'react-bootstrap/Modal';
import data from './data/data.json';


//2nd create the class -- will always have a render method

class App extends React.Component { //App name is a name that can be changed
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

  render() {
    return (
      <>
        <Header />
        <Main data={data}/>
        {/* <Modal show={this.state.showModal} onHide={this.closeModal}> */}
        <Footer />
      </>
    )
  }
}

// 3rd Export the Class for other files to import (always have)
export default App;