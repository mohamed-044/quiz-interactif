export function quizReducer(state, action) {
  switch(action.type) {
    case 'VALIDATE':
      return state.map(q => q.id === action.payload.id && q.validation === null ? { ...q, validation: action.payload.result } : q );
    default:
      return state;
  }
}
