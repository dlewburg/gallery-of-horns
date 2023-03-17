// Rebuild as a class component

//1st Imports
import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import data from './data/data.json';
import SelectedBeast from './Components/SelectedBeast'
import Form from 'react-bootstrap/Form'


//2nd create the class -- will always have a render method

class App extends React.Component { //App name is a name that can be changed
  constructor(props){
    super(props);
    this.state = {
      allBeast: data,
      showModal: false,
      selectedBeast: {}
    }
  }
  
  closeModal = () => {
    this.setState({
      showModal: false
    })
  }
  
  openModal = (name) => {
    let selectedBeasts = data.find(beast => beast.title === name);
    this.setState ({
      selectedBeast: selectedBeasts,
      showModal: true
    })
  }

selectOption = (event) => {
  event.preventDefault();
  let selected = event.target.value

  if (selected === '1'){
    let sortedBeast = data.filter((filteredBeast) => filteredBeast.horns === 1)
    
    this.setState({
      allBeast: sortedBeast
    })
    } else if (selected === '2'){
      let sortedBeast = data.filter((filteredBeast) => filteredBeast.horns === 2)

      this.setState({
        allBeast: sortedBeast
      })
    } else if (selected === '3'){
      let sortedBeast = data.filter((filteredBeast) => filteredBeast.horns === 3)

      this.setState({
        allBeast: sortedBeast
      })
    } else if (selected === '100'){
      let sortedBeast = data.filter((filteredBeast) => filteredBeast.horns === 100)
      
      this.setState({
        allBeast: sortedBeast
      })
    } else if (selected === 'all'){
        this.setState({
          allBeast: data
        })
    }
  }



  render() {
    return (
      <>
        <Header />
        <Form>
          <Form.Group>
            <Form.Select size="lg" name="selected" onChange={this.selectOption}>
              <option>Sort Beasts By Number of Horns</option>
              <option value="all">All Beast</option>
              <option value="1">1 Horned Beast</option>
              <option value="2">2 Horned Beast</option>
              <option value="3">3 Horned Beast</option>
              <option value="100">100 Horned Beast</option>
            </Form.Select>
          </Form.Group> 
        </Form>
        <Main data={this.state.allBeast} show={this.openModal}/>
        <SelectedBeast show = {this.state.showModal} onHide = {this.closeModal} selectedBeast = {this.state.selectedBeast} />
        <Footer />
      </>
    )
  }
}

// 3rd Export the Class for other files to import (always have)
export default App;
