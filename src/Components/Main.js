import React from 'react';
import Hornedbeast from '../Components/Hornedbeast';
import '../css/Main.css'

class Main extends React.Component {
  render() {

    return (
      <main>
        {this.props.data.map((beast) => {
          return <Hornedbeast
            title={beast.title}
            image_url={beast.image_url}
            description={beast.description} 
            key={beast._id}
            keyword={beast.keyword}
            horns={beast.horns}
            show = {this.props.show}
          />
        })}
      </main>
    )
  }
}

export default Main; 