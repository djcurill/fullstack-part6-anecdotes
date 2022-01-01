const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const compareByVotes = (left, right) => {
  return left.votes > right.votes ? -1 : 1;
};

export const addVote = (id) => {
  return {
    type: 'anecdotes/votes',
    payload: id,
  };
};

export const createAnecdote = (text) => {
  return { type: 'anecdotes/create', payload: text };
};

export const sortByVotes = () => {
  return { type: 'anecdotes/sort' };
};

const initialState = anecdotesAtStart.map(asObject);
export const anecdoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'anecdotes/votes': {
      return state.map((anecdote) => {
        if (anecdote.id !== action.payload) return anecdote;
        return { ...anecdote, votes: anecdote.votes + 1 };
      });
    }
    case 'anecdotes/create': {
      const newAnecdote = asObject(action.payload);
      return [...state, newAnecdote];
    }
    case 'anecdotes/sort': {
      return [...state].sort(compareByVotes);
    }
    default:
      return state;
  }
};

export default anecdoteReducer;
