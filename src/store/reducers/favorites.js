const INITIAL_STATE = [];

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE_SUCCESS':
      return [
        ...state,
        {
          id: 1,
          name: 'facebook/react',
          description: 'description facebooks',
          url: 'https://www.github.com/facebook/react',
        },
      ];
    default:
      return state;
  }
}
