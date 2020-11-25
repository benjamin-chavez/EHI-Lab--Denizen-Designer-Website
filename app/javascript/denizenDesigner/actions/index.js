export const FETCH_PARTICIPANTS = 'FETCH_PARTICIPANTS'
export const FETCH_PARTICIPANT = 'FETCH_PARTICIPANT'

export function fetchParticipant(id) {
  const promise = fetch("/api/v1/participants")
    .then(response => response.json());

  return {
    type: FETCH_PARTICIPANT,
    payload: promise
  }
}

export function fetchParticipants() {
  // AJAX request
  const promise = fetch(`/api/v1/participants/${id}`)
    .then(response => response.json());

  return {
    type: FETCH_PARTICIPANTS,
    payload: promise
  }
}
// 50:29