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

// import './participant.scss'
import '../../../assets/stylesheets/components/_participant.scss'

class Participant extends Component {
  // handleClick = () => {
  //   this.props.selectFlat(this.props.index);
  // }

  render() {
    const style = {

    };
    
    return (
      <div className="Participant">
        <p>Name: {this.props.firstName} {this.props.lastName}</p>
        <p>Role: {this.props.designerType}</p>
        <p>{this.props.bio}</p>
        <p>{this.props.interviewed}</p>
        <p>Contact: {this.props.email}</p>
      </div>
    );
  }
}

export default Participant;

