const INITIAL_STATE = [
  { id: 1, text: 'Desenvolver sistema para finalizar o curso da Rocketseat' },
  { id: 2, text: 'Escovar os dentes antes de dormir' },
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text }];
    default:
      return state;
  }
}
