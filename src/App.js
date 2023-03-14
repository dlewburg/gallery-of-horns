// Rebuild as a class component

//1st imports 
import React from 'react';
import Header from './Header';
import Footer from './Footer';

//2nd create the class -- will always have a render method

class App extends React.Component { //App name is a name that can be changed
  render(){
    return (
      <>
      <Header />
      <Main />
      <Footer />
      </>
      ) 
  }
}

// 3rd Export the Class for other files to import (always have)

export default App;