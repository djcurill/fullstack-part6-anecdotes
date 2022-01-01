import {
  anecdoteReducer,
  addVote,
  createAnecdote,
  sortByVotes,
} from './anecdoteSlice';

describe('anecdote reducer', () => {
  const initialState = [
    { id: 1, content: 'anecdote 1', votes: 0 },
    { id: 2, content: 'anecdote 2', votes: 2 },
    { id: 3, content: 'anecdote 3', votes: 1 },
  ];
  test('no action, nothing happens', () => {
    const action = { type: 'nothing happens' };
    const state = anecdoteReducer(initialState, action);
    expect(state).toEqual(initialState);
  });

  test('increase vote by one', () => {
    const originalAnecdote = initialState[0];
    const action = addVote(originalAnecdote.id);
    const state = anecdoteReducer(initialState, action);
    const updatedAnecdote = state.find((x) => x.id === originalAnecdote.id);
    expect(updatedAnecdote.votes).toBe(originalAnecdote.votes + 1);
  });

  test('adding a new a anecdote', () => {
    const action = createAnecdote('anecdote three');
    const state = anecdoteReducer(initialState, action);
    expect(state.length).toBe(initialState.length + 1);
  });

  test('anecdotes are sorted by votes', () => {
    const action = sortByVotes();
    const state = anecdoteReducer(initialState, action);
    const votes = state.map((x) => x.votes);
    const sortedVotes = [...votes].sort().reverse();
    expect(votes).toEqual(sortedVotes);
  });
});
