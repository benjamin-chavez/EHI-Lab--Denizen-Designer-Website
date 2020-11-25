import { FETCH_PARTICIPANTS, FETCH_PARTICIPANT } from '../actions';

export default function participantsReducer(state = [], action) {
  const { payload, type } = action;
  switch (type) {
    case FETCH_PARTICIPANTS:
      return payload;
    case FETCH_PARTICIPANT:
      const participants = state.splice(0);
      const index = participants.findIndex((participant) => participant.id === payload.id);
      if (index === -1) {
        participants.push(payload);
      } else {
        participants.splice(index, 1, payload);
      }
      return participants;
    default:
      return state;
  }
}