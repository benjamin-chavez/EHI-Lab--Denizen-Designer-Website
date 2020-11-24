import React, { useState, Fragment } from 'react';
import participantdata from '../../data/participants';
import ParticipantList from '../ParticipantList';

const Interviews = () => {
  const[participants, setParticipants] = useState(participantdata)  

  return (
    <Fragment>
      <h1>Interviews Page</h1>
      <ParticipantList participants={participantdata}
          />
    </Fragment>
  )
}

export default Interviews;