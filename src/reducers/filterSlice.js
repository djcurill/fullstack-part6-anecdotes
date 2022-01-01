export const filterAnecdote = (text) => {
  return { type: 'filters/contains', payload: text };
};

export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'filters/contains': {
      return action.payload;
    }
    default:
      return state;
  }
};

export default filterReducer;
