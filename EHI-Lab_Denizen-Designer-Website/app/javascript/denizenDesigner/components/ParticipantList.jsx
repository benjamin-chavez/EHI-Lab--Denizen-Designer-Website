import React from 'react';
import Participant from './Participant';


const ParticipantList = ( props ) => {
  // const renderList = props.participants.map((participant, index) =>
  //   <li key={index}>
  //     <p>test</p>
  //   </li>
  // );
  const renderList = () => {
    return props.participants.map((participant, index) => {
      return (
        // <Container>
        //   <Row>
        //     <Col sm={8}>sm=8</Col>
        //     <Col sm={4}>sm=4</Col>
        //   </Row>
        // </Container>
        <Participant
          participant={participant}
          // key={index}
          // index={index}
          firstName={participant.first_name}
          lastName={participant.last_name}
          designerType={participant.designer_type}
          bio={participant.bio}
          interviewed={participant.interviewed}
          email={participant.email}
        />
      );
    });
  };

  return (
    <div>
      <ul>{renderList()}</ul>
    </div>
  );
};

export default ParticipantList;
