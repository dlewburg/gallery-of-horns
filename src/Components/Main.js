import React from 'react';
import Hornedbeast from '../Components/Hornedbeast';
import data from './data/data.json';


class Main extends React.Component {
  render() {

    return (
      <>
        {data.map(beast => {
          return <Hornedbeast />
        })}
      </>
    )
  }
}

export default Main; 