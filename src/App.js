// Rebuild as a class component

//1st Imports
import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import data from './data/data.json';
import SelectedBeast from './Components/SelectedBeast'


//2nd create the class -- will always have a render method

class App extends React.Component { //App name is a name that can be changed
  constructor(props){
    super(props);
    this.state = {
      allBeast: data,
      showModal: false,
      selectedBeast: {}
      // selectedBeastIimg:''
      // selectedBeastDesc:''
    }
  }
  
  closeModal = () => {
    this.setState({
      showModal: false
    })
    console.log('Closed Clicked')
  }
  
  openModal = (name) => {
    let selectedBeasts = data.find(beast => beast.title === name);
    this.setState ({
      selectedBeast: selectedBeasts,
      showModal: true
    })

    console.log('Open Modal Clicked');
    console.log(this.state.selectedBeast);
    console.log(name);
  }

  render() {
    return (
      <>
        <Header />
        <Main data={this.state.allBeast } show={this.openModal}/>
        <SelectedBeast show = {this.openModal} onHide = {this.closeModal} selectedBeast = {this.state.selectedBeast} display={this.state.showModal}/>
        <Footer />
      </>
    )
  }
}

// 3rd Export the Class for other files to import (always have)
export default App;

// show={this.state.showModal} onHide={this.closeModal}