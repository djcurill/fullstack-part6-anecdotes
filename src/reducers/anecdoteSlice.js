import anecdoteService from '../services/anecdotes';

const compareByVotes = (left, right) => {
  return left.votes > right.votes ? -1 : 1;
};

export const addVote = (anecdote) => async (dispatch) => {
  const updatedAnecdote = await anecdoteService.updateAnecdote({
    ...anecdote,
    votes: anecdote.votes + 1,
  });
  dispatch({
    type: 'anecdotes/votes',
    payload: updatedAnecdote,
  });
};

export const createAnecdote = (content) => async (dispatch) => {
  const newAnecdote = await anecdoteService.createNew(content);
  dispatch({ type: 'anecdotes/create', payload: newAnecdote });
};

export const sortByVotes = () => {
  return { type: 'anecdotes/sort' };
};

export const initializeAnecdotes = () => async (dispatch) => {
  const anecdotes = await anecdoteService.getAll();
  dispatch({ type: 'anecdotes/init', payload: anecdotes });
};

export const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'anecdotes/votes': {
      return state.map((anecdote) => {
        if (anecdote.id !== action.payload.id) return anecdote;
        return { ...action.payload };
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
