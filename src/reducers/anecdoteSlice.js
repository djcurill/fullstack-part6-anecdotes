const compareByVotes = (left, right) => {
  return left.votes > right.votes ? -1 : 1;
};

export const addVote = (id) => {
  return {
    type: 'anecdotes/votes',
    payload: id,
  };
};

export const createAnecdote = (anecdote) => {
  return { type: 'anecdotes/create', payload: anecdote };
};

export const sortByVotes = () => {
  return { type: 'anecdotes/sort' };
};

export const initializeAnecdotes = (anecdotes) => {
  return { type: 'anecdotes/init', payload: anecdotes };
};

export const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'anecdotes/votes': {
      return state.map((anecdote) => {
        if (anecdote.id !== action.payload) return anecdote;
        return { ...anecdote, votes: anecdote.votes + 1 };
      });
    }
    case 'anecdotes/create': {
      return [...state, action.payload];
    }
    case 'anecdotes/sort': {
      return [...state].sort(compareByVotes);
    }
    case 'anecdotes/init': {
      return action.payload;
    }
    default:
      return state;
  }
};

export default anecdoteReducer;
