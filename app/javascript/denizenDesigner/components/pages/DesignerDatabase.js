import React, { useState, Fragment } from 'react';
import participantdata from '../../data/participants';
import ParticipantList from '../ParticipantList';

const DesignerDatabase = () => {
  const[participants, setParticipants] = useState(participantdata)  

  return (
    <Fragment>
      <h1>Designer Database Page</h1>
      <ParticipantList participants={participantdata}
          />
    </Fragment>
  )
}

export default DesignerDatabase;