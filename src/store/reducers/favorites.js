const INITIAL_STATE = [];

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [
        ...state,
        {
          id: 1,
          name: 'facebook/react',
          description: 'description facebook',
          url: 'https://www.github.com/facebook/react',
        },
      ];
    default:
      return state;
  }
}
