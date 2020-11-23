// import React from 'react' 

// const participant = ( props ) => {
//   const style = {

//   };

//   return (
//     <div style={style}>
//       <p>{props.firstName}</p>
//     </div>
//   )
// };

// export default participant;
import React, { Component } from 'react';

import './Participant.css'

class Participant extends Component {
  // handleClick = () => {
  //   this.props.selectFlat(this.props.index);
  // }

  render() {
    const style = {

    };
    
    return (
      <div className="Participant">
        <p>{this.props.firstName}</p>
        <p>{this.props.lastName}</p>
        <p>{this.props.designerType}</p>
        <p>{this.props.bio}</p>
        <p>{this.props.interviewed}</p>
        <p>{this.props.email}</p>
      </div>
    );
  }
}

export default Participant;

