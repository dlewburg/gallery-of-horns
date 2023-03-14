import React from 'react';
import Hornedbeast from '../Components/Hornedbeast';
import data from '../data/data.json';


class Main extends React.Component {
  render() {

    return (
      <>
        {data.map((beast, index) => {
          return <Hornedbeast title={beast.title} image_url={beast.image_url} description={beast.description} key={index} />
        })}
      </>
    )
  }
}

export default Main; 